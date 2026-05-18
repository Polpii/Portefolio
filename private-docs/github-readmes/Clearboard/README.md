# Tangible Co-Ideation

> **Embodied Prompting for Creative Thinking with Large Language Models**
>
> Finalist — ACM DIS 2026 Student Design Competition
> Full-paper submission — ACM UIST 2026
>
> Developed at MIT Media Lab, Tangible Media Group, in collaboration with the Institute for Future Technologies, advised by Prof. Hiroshi Ishii and Dr. Xiao Xiao.

---

## What this is

**Tangible Co-Ideation** is a research prototype that turns prompting an LLM into a *spatial, physical design activity* instead of a linear chat exchange. The user manipulates tagged tangible objects (mentors, lighthouses, debate cards, problem statements) on an instrumented surface. The system reads their layout, builds a structured prompt that mixes prose context with object-level metadata, and routes it through a **retrieval-augmented generation (RAG)** layer over the user's own corpus (papers, talks, sketches, prior conversations). Multiple LLM agents — each instantiated as a distinct *expert persona* — then play two roles:

1. **Collaborators** — generating critiques and suggestions live for the user.
2. **Simulated raters** — running offline as an *LLM-as-a-judge* panel that scores candidate outputs against rubrics, calibrated against a held-out set of human ratings.

The setup makes the rating loop visible and editable: the user can re-arrange objects, swap personas, or escalate to a structured debate between two adversarial agents, and watch how the response changes.

---

## Why it matters

Most LLM interfaces collapse the entire reasoning loop into a single text box. That hides:

- **what the model is implicitly retrieving** (which prior context, which sources),
- **whose voice it is reasoning from** (one model, no diversity),
- **how it would be evaluated** (no rubric, no panel, no calibration).

Tangible Co-Ideation externalises all three. Retrieval becomes a stack of physical objects. The persona is a figurine you pick up. Evaluation is a row of debate cards you place on the table. Each move maps to an explicit change in the prompt, the retrieval query, or the rater panel. The hypothesis — supported by our within-subjects user study (n=12) — is that this externalisation produces more critical engagement and more diverse design directions than a chat baseline.

---

## System architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                         TANGIBLE SURFACE                             │
│  (tagged objects: mentors · lighthouses · problem cards · debates)   │
└─────────────────────────────┬────────────────────────────────────────┘
                              │ object id, position, orientation
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│                        PROMPT ASSEMBLER                              │
│  • normalise object layout → structured JSON state                   │
│  • resolve persona ids → system prompts                              │
│  • compose user-facing prose + state into the final prompt           │
└─────────────────────────────┬────────────────────────────────────────┘
                              │ query
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│                       RAG RETRIEVAL LAYER                            │
│  • dense embeddings of the user's corpus (papers, talks, notes)      │
│  • top-k retrieval, then re-ranking with cross-encoder               │
│  • optional persona-conditioned retrieval (different views of the    │
│    same corpus)                                                      │
└─────────────────────────────┬────────────────────────────────────────┘
                              │ context windows + prompt
                              ▼
┌──────────────────────────────────────────────────────────────────────┐
│                  MULTI-AGENT LLM ORCHESTRATION                       │
│                                                                      │
│  Collaborator agents (live, streamed)                                │
│      mentor.persona_1, mentor.persona_2, ...                         │
│                                                                      │
│  Adversarial debate (two agents, N turns)                            │
│      pro_agent ↔ con_agent → moderator summary                       │
│                                                                      │
│  Simulated rater panel (offline / batch)                             │
│      rater_1..rater_K → rubric score + rationale → aggregator        │
└─────────────────────────────┬────────────────────────────────────────┘
                              │
                              ▼
                  Response + traces shown on display
                  (text + retrieval citations + rater scores)
```

---

## Technical contributions

### 1. Persona-conditioned RAG

Each tangible mentor figurine is bound to a **system prompt** and to a **retrieval filter** (e.g. cluster of documents, weighting on keywords). Picking up a mentor literally swaps the view of the corpus the LLM has access to. This makes "talking to a different expert" a concrete physical action rather than a hidden prompt-engineering trick.

### 2. Adversarial debate as a first-class object

The "debate" card spawns two opposing LLM agents that exchange N turns on a topic. A moderator agent then summarises agreements, disagreements, and open questions. Used in the user study, this gave participants a structured way to surface the *space of disagreement* rather than a single confident answer.

### 3. LLM-as-a-judge with human calibration

For offline evaluation, the system can replay any session through a panel of LLM raters. Each rater scores candidate outputs against an explicit rubric (relevance, novelty, technical depth, grounding). We benchmarked rater agreement against held-out human ratings on the same examples and selected rubric/temperature combinations that maximised Spearman correlation with human judgments. This is the same autorating + user-simulation pattern used in current LLM-evaluation research.

### 4. Hardware sensing

Object identity and pose are read either through fiducial markers + overhead camera or through capacitive/conductive sensing on a custom PCB, depending on the variant. The paper compares both and discusses the trade-offs (latency, robustness, expressiveness).

---

## Repository layout

```
├── apps/web/                Next.js front-end (surface visualisation, prompt traces)
├── apps/sensor/             Sensing client (camera + marker tracking OR capacitive PCB)
├── packages/llm/            LLM agent orchestration, persona registry, debate runner
├── packages/rag/            Embedding pipeline, vector store wrapper, re-ranker
├── packages/eval/           Rater panel, rubric definitions, scoring + aggregation
├── studies/                 Anonymised study protocol, codebooks, analysis notebooks
└── docs/                    DIS 2026 + UIST 2026 manuscripts, video material
```

---

## Stack

| Layer | Technology |
|---|---|
| Front-end | Next.js · React · TypeScript · Tailwind |
| LLM | GPT-4-class APIs (OpenAI / Anthropic) |
| Embeddings | OpenAI `text-embedding-3-large` (configurable) |
| Vector store | local FAISS + on-disk SQLite metadata |
| Sensing | OpenCV (ArUco / AprilTag) **or** custom capacitive PCB + microcontroller |
| Eval | Python — `pandas`, `scipy.stats`, `scikit-learn` |

---

## Getting started

```bash
# 1. Install
pnpm install

# 2. Configure
cp .env.example .env.local
# fill in OPENAI_API_KEY, ANTHROPIC_API_KEY, and the path to your corpus

# 3. Build the corpus index (one-off, ~minutes depending on size)
pnpm rag:index --corpus ./data/my-corpus

# 4. Run
pnpm dev                  # web app on http://localhost:3000
pnpm sensor:start         # sensing client (camera variant)
```

For the capacitive variant, see [`apps/sensor/hardware/README.md`](apps/sensor/hardware/README.md) for the schematic, firmware, and calibration script.

---

## Reproducing the user study

```bash
# Re-score logged sessions with the rater panel
python packages/eval/run_raters.py \
    --sessions ./studies/dis2026/sessions \
    --rubric   ./studies/dis2026/rubric.yaml \
    --raters   3 \
    --out      ./studies/dis2026/rater_scores.csv

# Compare rater vs. human ratings
python packages/eval/calibrate.py \
    --rater  ./studies/dis2026/rater_scores.csv \
    --human  ./studies/dis2026/human_ratings.csv
```

---

## Citation

If you build on this work, please cite the DIS 2026 paper:

```bibtex
@inproceedings{arslan2026tangible,
  title     = {Tangible Co-Ideation: Designing Embodied Prompting for Creative Thinking with Large Language Models},
  author    = {Arslan, Paul-Peter and Xiao, Xiao and Ishii, Hiroshi},
  booktitle = {Proceedings of the 2026 ACM Designing Interactive Systems Conference (DIS '26)},
  year      = {2026},
  note      = {Student Design Competition Finalist}
}
```

---

## License

Research code released under the MIT License. See `LICENSE`.
