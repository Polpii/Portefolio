# IPheromone

> What if AI could connect you to the people you are meant to find — guiding you with synthetic pheromones?
>
> **Winner — Connect track, MIT Hard Mode: Hardware AI Hackathon** (MIT Media Lab, 2026).
> Sponsors: Anthropic, Akamai, Qualcomm, Bambu Lab.
>
> Built by Awu Chen, Paul-Peter Arslan, Jianing Yu, Richard Zhang, and Elisa over one weekend at MIT.

---

## The idea

We live in a world where technology keeps making us more disconnected — even when we are surrounded by people with overlapping interests, shared ambitions, and compatible histories. We never find each other.

IPheromone is a **wearable ambient-intelligence system** that changes that. It gets to know you deeply through a voice interview, distills your personality into a unique scent signature, and then quietly works on your behalf in social spaces — scanning for other devices nearby, running **AI-to-AI compatibility conversations**, and triggering a sensory signal when it finds someone you are highly compatible with.

No app to check. No swiping. Just a scent and a heartbeat.

---

## Research framing — why this is interesting beyond the hackathon

IPheromone is built around three patterns that are central to modern LLM research:

1. **User simulation with LLM personas.** Each wearer has a personal LLM agent that holds a structured profile (built during the voice interview) and can answer questions *as that user* — a high-fidelity simulation of the wearer used for evaluation and for live agent-to-agent negotiation.
2. **Multi-agent autorating.** When two devices come within range, their agents exchange structured profile summaries and run a brief negotiation that ends with a **calibrated compatibility score** — i.e. an *automatic rating* of the human-to-human match, grounded in the user-simulation profiles above.
3. **Closed-loop sensory feedback.** A high score triggers a physical signal — scent release + an escalating haptic heartbeat — that uses the body as a low-bandwidth output channel for a high-stakes social inference.

This combination (user simulation → autorating → embodied feedback) is the same evaluation pattern used in LLM-judge research, just put into a wearable.

---

## How it works

1. **Interview.** Your agent interviews you by voice. It asks about your personality, interests, history, and aspirations — then builds a rich profile using **Claude (Anthropic)**.
2. **Scent assignment.** Your profile is distilled into a unique **scent recipe** — a sequence of fragrance channels (12 in the current diffuser) that represents who you are.
3. **Social scanning.** When you enter a space, your device scans for other IPheromone users nearby. Agents run 1-to-1 conversations with each, exchanging information and scoring compatibility.
4. **Match signal.** When a strong match is found, *their* scent is released around your neck via the wearable diffuser. A **haptic heartbeat** then begins, increasing in frequency as the two of you physically approach each other.

---

## Tech overview

The system has three coordinated parts:

### 1. Web app (Next.js)

The control center. Handles user profiles, the interview flow, the agent-to-agent matching conversations, and the scent-recipe manager. Visible on phone or laptop in a shared space, and reachable on the local network from each Raspberry Pi.

### 2. Raspberry Pi wearable client

A physical device with a small display, a NeoPixel LED strip, a microphone, a speaker, and a push-to-talk button. It shows the **companion's state** in real time (a pixel-art Tamagotchi), lets the wearer speak by holding the button, and drives the sensory feedback loop (scent + heartbeat).

### 3. BLE scent bridge

A Python HTTP server running on the same machine as the web app. It exposes a small REST interface and translates calls into **BLE commands** sent to the scent-diffuser hardware. The diffuser exposes 12 fragrance channels that can be opened individually and on a schedule.

---

## Features

- **Voice interview** — Claude conducts a deep onboarding conversation to build your profile.
- **Unique scent recipe** — AI maps your personality to a sequence of fragrance channels on the diffuser.
- **Multi-agent matching** — when two wearers are nearby, their AI agents have a direct conversation and score compatibility.
- **Physical feedback** — a match triggers scent release + an escalating heartbeat sequence (MP3).
- **Tamagotchi companion** — a pixel-art creature lives on the Pi display, animating in sync with the system state (`listening`, `thinking`, `dating`, etc.).
- **LED strip animations** — NeoPixels react to every state change in real time.
- **Push-to-talk** — hold the button on the Pi to talk; Whisper transcribes and the agent responds.

---

## Project structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx              # Main dashboard
│   │   ├── scent/                # Scent device control & recipe viewer
│   │   ├── user/[id]/            # Per-user companion screen
│   │   └── api/                  # API routes (see below)
│   ├── components/
│   │   ├── CompanionScreen.tsx   # Main interactive companion UI
│   │   ├── Tamagotchi.tsx        # Pixel-art creature renderer
│   │   ├── InterviewScreen.tsx   # Onboarding interview flow
│   │   └── WelcomeScreen.tsx
│   └── lib/                      # Shared utilities (Claude client, profiles, scent bridge)
├── raspberry/
│   ├── client.py                 # Pi hardware client
│   ├── start-client.sh           # Boot script
│   └── install-autostart.sh      # One-time setup on the Pi
├── scent-bridge/
│   └── server.py                 # BLE bridge (Python HTTP → BLE diffuser)
└── data/                         # JSON store (profiles, recipes, conversations, states)
```

---

## Getting started

### Requirements

- Node.js **18+**
- An **Anthropic** API key (Claude)
- Python **3.10+** (for the scent bridge and the Pi client)

### Install

```bash
npm install
```

Create `.env.local`:

```dotenv
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...        # for Whisper audio transcription
SCENT_BRIDGE_PORT=5050       # optional, defaults to 5050
```

### Run

```bash
npm run dev
```

Opens on `http://localhost:3000` — and on your local network at `http://<your-ip>:3000`, which the Pi client connects to.

### Keyboard shortcuts (web app)

| Key | Action |
|-----|--------|
| `L` | Toggle voice listening |
| `A` | Show artwork on the Pi display for 30 s |

---

## Raspberry Pi setup

### Hardware

| Component                | Role                       |
|--------------------------|----------------------------|
| Raspberry Pi 4           | Main compute               |
| Seeed Studio ST7789      | 240×280 SPI display        |
| NeoPixel LED strip       | 30 px, GPIO13              |
| Push button              | GPIO26                     |
| USB microphone           | Audio input                |
| Speaker + `mpg123`       | Audio output               |

### Install dependencies on the Pi

```bash
sudo apt update && sudo apt install -y mpg123 python3-venv

python3 -m venv ~/display-env
source ~/display-env/bin/activate

pip install \
  adafruit-circuitpython-rgb-display \
  adafruit-circuitpython-neopixel \
  Pillow requests sounddevice numpy \
  gpiozero bleak
```

### Autostart on boot (one-time setup)

Copy `client.py`, `start-client.sh`, and `install-autostart.sh` to `/home/ipheromone/raspberry/`, then:

```bash
sudo bash /home/ipheromone/raspberry/install-autostart.sh "YOUR_WIFI_PASSWORD"
```

After that, plug the Pi in and it connects to Wi-Fi and starts the client automatically — no interaction needed.

### Run manually

```bash
source ~/display-env/bin/activate
cd ~/raspberry
python3 client.py --server http://<server-ip>:3000 --user elisa
```

### Sound files (place in `raspberry/`)

| File             | Trigger                                   |
|------------------|-------------------------------------------|
| `listen.mp3`     | Recording starts                          |
| `wave.mp3`       | Someone waves                             |
| `dating.mp3`     | Dating loop (plays until match found)     |
| `heartbeat05.mp3`| Match found — slow heartbeat              |
| `heartbeat1.mp3` | Approaching — medium heartbeat            |
| `heartbeat15.mp3`| Close — fast heartbeat                    |

---

## Scent bridge

The bridge runs as a local Python HTTP server and translates REST calls from the web app into BLE commands sent to the scent diffuser. It auto-starts when the `/scent` page opens, but you can also run it manually:

```bash
cd scent-bridge
pip install bleak
python server.py --port 5050
```

| Route        | Method | Purpose                                |
|--------------|--------|----------------------------------------|
| `/health`    | GET    | Status (no BLE scan)                   |
| `/connect`   | GET    | Scan and connect                       |
| `/play`      | POST   | Play a scent sequence                  |
| `/stop`      | POST   | Force stop all 12 channels             |

---

## API routes

| Route                                | Purpose                                       |
|--------------------------------------|-----------------------------------------------|
| `POST /api/interview`                | Claude voice interview                        |
| `POST /api/listen`                   | Process transcription, route to action        |
| `POST /api/transcribe`               | Audio → text (Whisper)                        |
| `GET/POST /api/user/state`           | Tamagotchi state sync (Pi ↔ web)              |
| `GET/POST /api/profile`              | User profiles                                 |
| `POST /api/profile/register`         | Register new user                             |
| `POST /api/seed`                     | AI-generate a user profile                    |
| `POST /api/agents/date`              | Run agent-to-agent matching                   |
| `GET  /api/agents/activity`          | Active matching sessions                      |
| `GET  /api/agents/conversations`     | Conversation history                          |
| `POST /api/scent/play`               | Play scent recipe                             |
| `POST /api/scent/stop`               | Stop playback                                 |
| `POST /api/scent/recipe`             | Generate scent recipe                         |
| `GET  /api/scent/status`             | Device status                                 |
| `POST /api/scent/connect`            | Connect to BLE device                         |

---

## Stack

| Layer         | Technology                                   |
|---------------|----------------------------------------------|
| Framework     | Next.js 16 + React 19                        |
| Language      | TypeScript                                   |
| AI            | Claude (Anthropic) — interviews, profiles, matching |
| Transcription | OpenAI Whisper                               |
| Styling       | Tailwind CSS 4                               |
| Hardware AI   | Raspberry Pi 4                               |
| Display       | Adafruit CircuitPython ST7789                |
| LEDs          | NeoPixel                                     |
| BLE           | `bleak` (Python)                             |

---

## Recognition

🏆 **Winner — Connect track**, MIT Hard Mode: Hardware AI Hackathon, MIT Media Lab, 2026.
Sponsors: Anthropic, Akamai Technologies, Qualcomm, Bambu Lab.

---

## License

MIT. See `LICENSE`.
