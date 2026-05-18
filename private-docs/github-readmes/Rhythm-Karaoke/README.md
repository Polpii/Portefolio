# Rhythm Karaoke

> **A High-Resolution Timing Engine for Fine Motor Behavior**
>
> Submitted to **Scientific Reports** (Springer Nature).
>
> Developed at the Institute for Future Technologies and the Neuroscience Institute Paris.

---

## What this is

Rhythm Karaoke is a **Unity-based experimental platform** for studying fine motor timing through *rhythmic imitation*. Participants hear (or read) a stimulus — a melody, a spoken phrase, a metronome variant — and tap along on a precision finger-force device. The system records every event with millisecond accuracy, computes a battery of standard timing metrics, and exposes them to downstream machine-learning pipelines.

It is built primarily as a **measurement tool**, not a game. The "karaoke" framing exists to keep participants engaged across long sessions, but every design decision behind the system is constrained by what is required to produce *clean, reproducible timing data*.

---

## Why this matters

Fine motor timing is a sensitive marker of motor control and motor learning. A useful behavioural measurement engine in this space has to:

- record stimulus, tap onset, and tap force on a **shared clock** with sub-millisecond drift;
- separate *production* errors (the participant taps late) from *perception* errors (the participant heard the beat differently);
- produce features that downstream ML can consume directly — without bespoke preprocessing per study.

Rhythm Karaoke is designed around those three constraints.

---

## What the system measures

For each trial, the engine reports:

| Metric | Definition |
|---|---|
| **Mean signed asynchrony** | average signed offset (ms) between tap onset and stimulus onset |
| **Asynchrony variability** | standard deviation of the signed asynchrony series |
| **Lag-1 autocorrelation** | autocorrelation of the asynchrony series at lag 1 — diagnoses error-correction dynamics |
| **Inter-tap interval (ITI)** | distribution of intervals between consecutive taps |
| **Force profile** | per-tap peak force, rise time, dwell |
| **Completion rate** | fraction of expected stimulus events that received a tap within the response window |

These features are written out as a per-trial CSV and a per-session JSON manifest. They feed directly into the downstream R / Python statistical analysis used in the paper, and into the HD-EMG decoding pipeline as labels.

---

## Repository layout

```
├── Assets/                  Unity project — scenes, scripts, prefabs, audio
│   ├── Scripts/             Game logic + measurement engine
│   ├── Audio/               Stimulus banks (metronome, melody, semantic)
│   ├── Scenes/              Calibration, training, and study scenes
│   └── Shaders/             Visual stimuli (HLSL / ShaderLab)
├── Packages/                Unity package manifest
├── ProjectSettings/         Unity project settings
└── README.md
```

---

## Stack

| Layer | Technology |
|---|---|
| Engine | Unity 2022 LTS |
| Language | C# 9 (79.5%), ShaderLab (17.5%), HLSL (3%) |
| Input | Custom finger-force device (USB-serial, fixed-rate sampling) + standard MIDI / keyboard fallback |
| Audio | Unity audio + low-latency `OnAudioFilterRead` callback for precise stimulus timestamps |
| Data export | CSV + JSON per session, written to `Application.persistentDataPath` |

---

## How the timing engine is built

The non-obvious part of the system is **how the clocks line up**. Two design choices keep drift bounded:

1. **All event timestamps are taken from the same audio thread clock** (`AudioSettings.dspTime`) rather than from `Time.time` or wall-clock. This avoids frame-quantisation jitter (~16.6 ms at 60 fps) and aligns stimulus onsets, tap onsets, and recorded force samples on a single monotonic clock.
2. **The finger-force device is read on a dedicated thread** with a high-resolution timer; each sample is timestamped at the device, not at the Unity main loop, so frame stalls do not propagate into the data.

The engine runs through a five-state cycle:

```
   ┌─────────────┐
   │ CALIBRATE   │  device offsets, audio latency, baseline force
   └─────┬───────┘
         ▼
   ┌─────────────┐
   │  PRACTICE   │  short familiarisation block, not logged
   └─────┬───────┘
         ▼
   ┌─────────────┐      stimulus playback + tap capture +
   │   TRIAL     │ ───▶ event log + per-frame UI feedback
   └─────┬───────┘
         ▼
   ┌─────────────┐
   │   SCORE     │  compute trial metrics, append to session log
   └─────┬───────┘
         ▼
   ┌─────────────┐
   │   EXPORT    │  write CSV + JSON, signed + hashed
   └─────────────┘
```

---

## Getting started

### Requirements

- **Unity 2022.3 LTS** or newer (Unity Hub recommended)
- Windows 10/11 or macOS 12+
- A finger-force input device (project supports the **Dextrain Manipulandum**; a MIDI / keyboard fallback exists for testing)

### Open the project

```bash
git clone https://github.com/Polpii/Rhythm-Karaoke.git
cd Rhythm-Karaoke
```

Open Unity Hub → **Add Project** → select the cloned folder → open with **Unity 2022.3 LTS**.

### Run

In Unity:

1. Open `Assets/Scenes/Calibration.unity` and press **Play** to calibrate latency + force baseline.
2. Open `Assets/Scenes/Study.unity` and press **Play** to run a full session.
3. Sessions are written to `Application.persistentDataPath/RhythmKaraoke/<participant>/<timestamp>/`.

### Build a standalone executable

In Unity: **File → Build Settings → Windows / macOS → Build**. The build is self-contained; the data folder is created next to the executable.

---

## Data analysis

A small companion analysis package (Python + R) is included under `analysis/` (where present). Typical workflow:

```python
import pandas as pd
trials = pd.read_csv("session_2025-10-12/trials.csv")
trials["abs_asynchrony"] = trials["signed_asynchrony_ms"].abs()
# group by condition, compute the metric battery, fit a mixed-effects model in R
```

---

## Citation

```bibtex
@article{arslan2026rhythm,
  title   = {Rhythm Karaoke: A High-Resolution Timing Engine for Fine Motor Behavior},
  author  = {Arslan, Paul-Peter and Lindberg, Pavel and Xiao, Xiao},
  journal = {Scientific Reports (Springer Nature)},
  year    = {2026},
  note    = {Under review}
}
```

---

## License

Research code; please contact the author before reuse beyond academic replication.
