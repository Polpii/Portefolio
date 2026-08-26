export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt: string;
  caption?: string;
  poster?: string;
  fit?: "cover" | "contain";
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectSection = {
  title: string;
  description: string[];
  media?: ProjectMedia[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  status: string;
  summary: string;
  tagline: string;
  preview: ProjectMedia;
  hero: ProjectMedia;
  tags: string[];
  links: ProjectLink[];
  highlights: string[];
  sections: ProjectSection[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "tangible-co-ideation",
    title:
      "Tangible Co-Ideation: Designing Embodied Prompting for Creative Thinking with Large Language Models",
    eyebrow: "Embodied Prompting",
    year: "2026",
    status: "Demo Award at ACM CHI 2026; finalist at ACM DIS 2026 Student Design Competition; full paper submitted to ACM CHI 2027",
    summary:
      "A tangible ideation system that turns prompting into a spatial, physical design activity instead of a linear chat exchange.",
    tagline:
      "Reframing LLM prompting as embodied creative thinking rather than text entry.",
    preview: {
      type: "image",
      src: "/Tangible/HeroPick.jpeg",
      alt: "Preview image for Tangible Co-Ideation",
    },
    hero: {
      type: "video",
      src: "/Tangible/Tangible_web.mp4",
      alt: "Demonstration video for Tangible Co-Ideation",
      poster: "/Tangible/HeroPick.jpeg",
    },
    tags: ["Design Research", "Tangible UI", "Human-AI Interaction", "LLMs"],
    links: [
      {
        label: "Open submission PDF",
        href: "/api/doc/Tangible/tangible_co_ideation_submission.pdf",
      },
    ],
    highlights: [
      "Embodies AI expert personas as figurines to shift prompting from text to spatial reasoning.",
      "Uses a lighthouse object to surface related work during ideation without collapsing the whole process into a chat thread.",
      "Introduces goal tokens to steer summarization and evaluation while keeping the human in charge of meaning-making.",
      "Builds on RAG, prompt engineering, and tangible sensing to support divergent and convergent design cycles.",
    ],
    sections: [
      {
        title: "Why this project exists",
        description: [
          "The submission starts from a simple tension: designers rarely think in a neat sequence of sentences, yet most LLM systems still force them into a chat box. Tangible Co-Ideation pushes against that constraint by giving ideation a spatial, embodied interface.",
          "The project frames prompting as a creative material. Instead of writing longer prompts, people compose perspectives, goals, and references through physical objects that can be moved, rotated, and combined.",
        ],
        media: [
          {
            type: "image",
            src: "/Tangible/Debatingmode.jpeg",
            alt: "Debating mode in Tangible Co-Ideation",
          },
          {
            type: "image",
            src: "/Tangible/interface.jpeg",
            alt: "Interface for Tangible Co-Ideation",
          },
        ],
      },
      {
        title: "The tangible prompting system",
        description: [
          "Three families of objects structure the process. AI Expert Personas act as embodied viewpoints, letting a concept be critiqued through different value systems. A lighthouse object helps search and retrieve relevant work during brainstorming. Goal tokens encode evaluation criteria so summarization and reflection stay visible and adjustable.",
          "Together, those objects make ideation feel more like arranging a design conversation in space than issuing commands to a chatbot.",
        ],
        media: [
          {
            type: "image",
            src: "/Tangible/object1.jpeg",
            alt: "AI Expert Persona figurine",
          },
          {
            type: "image",
            src: "/Tangible/lighthouse.jpeg",
            alt: "Lighthouse object for related work retrieval",
          },
          {
            type: "image",
            src: "/Tangible/mentor1.jpeg",
            alt: "Mentor figurine for Tangible Co-Ideation",
          },
          {
            type: "image",
            src: "/Tangible/mentor2.jpeg",
            alt: "Mentor figurine alternative view",
          },
        ],
      },
      {
        title: "Technical direction",
        description: [
          "The paper describes an AI pipeline that combines curated knowledge, prompt engineering, and retrieval across papers, talks, sketches, and prior conversations. It also explores conductive and capacitive tangible sensing as a more expressive alternative to marker-based tracking.",
          "That technical layer matters because the goal is not only to make AI more playful, but to support critical engagement and keep the human meaningfully inside the loop.",
        ],
        media: [
          {
            type: "video",
            src: "/Tangible/Tangible_web.mp4",
            alt: "Tangible Co-Ideation demo video",
            poster: "/Tangible/HeroPick.jpeg",
          },
        ],
      },
    ],
  },
  {
    slug: "ipheromone",
    title: "IPheromone",
    eyebrow: "Wearable Ambient Intelligence",
    year: "2026",
    status: "Winner of the Connect track at MIT Hard Mode: Hardware AI Hackathon",
    summary:
      "A wearable social matching system that uses voice interviews, agent-to-agent compatibility checks, scent release, and haptic feedback to help people find meaningful connections.",
    tagline:
      "An AI companion that turns compatibility into scent, rhythm, and proximity.",
    preview: {
      type: "image",
      src: "/IPheromone/IntroPick.jpeg",
      alt: "Intro image for IPheromone",
    },
    hero: {
      type: "video",
      src: "/IPheromone/IPheromone.mp4",
      alt: "IPheromone demo video",
      poster: "/IPheromone/HeroPick.jpeg",
    },
    tags: ["Hackathon", "Wearables", "AI Agents", "Physical Computing"],
    links: [
      {
        label: "View demo video",
        href: "/IPheromone/IPheromone.mp4",
      },
      {
        label: "View GitHub repo",
        href: "https://github.com/Polpii/IPheromone",
      },
    ],
    highlights: [
      "Builds user profiles through a voice interview and maps personality to a scent signature.",
      "Runs agent-to-agent compatibility conversations instead of relying on swipe-based interaction.",
      "Combines a web app, Raspberry Pi wearable, and a scent bridge into a single social computing system.",
      "Won the Connect track at MIT Hard Mode in 2026.",
    ],
    sections: [
      {
        title: "Core interaction",
        description: [
          "IPheromone imagines a social interface that stays mostly out of sight. Rather than asking people to check a phone, the system interviews them by voice, builds a richer profile, and quietly scans for meaningful matches in the background.",
          "When the system finds a strong match, it signals through scent and a heartbeat-like haptic pattern. The whole interaction is meant to feel ambient, embodied, and low-friction.",
        ],
        media: [
          {
            type: "video",
            src: "/IPheromone/IPheromone.mp4",
            alt: "IPheromone demo video",
          },
          {
            type: "image",
            src: "/IPheromone/Object.jpeg",
            alt: "Close-up image of the IPheromone object",
          },
        ],
      },
      {
        title: "System architecture",
        description: [
          "According to the repository, the project has three main pieces: a Next.js web app for profiles and agent logic, a Raspberry Pi wearable client for voice and physical feedback, and a scent bridge that translates web requests into diffuser commands.",
          "This split is one of the strongest parts of the project: the intelligence is distributed across software, hardware, and atmosphere rather than trapped inside a single screen.",
        ],
        media: [
          {
            type: "image",
            src: "/IPheromone/HeroPick.jpeg",
            alt: "Prototype hero shot for IPheromone",
          },
          {
            type: "image",
            src: "/IPheromone/Winner.jpeg",
            alt: "Winner image from MIT Hard Mode for IPheromone",
          },
        ],
      },
    ],
  },
  {
    slug: "second-self",
    title: "Second Self",
    eyebrow: "Augmented Mirror Platform",
    year: "2021",
    status: "Platform for recreational, medical, and educational augmented mirror experiences",
    summary:
      "An augmented mirror platform that overlays interactive applications on a live reflection using depth sensing, pose estimation, and spatial alignment.",
    tagline:
      "Turning the mirror into a responsive mixed-reality platform for learning and movement.",
    preview: {
      type: "image",
      src: "/SecondSelf/secondselfTeaser.jpeg",
      alt: "Preview image for Second Self",
    },
    hero: {
      type: "image",
      src: "/SecondSelf/secondself.jpeg",
      alt: "Hero image for Second Self",
    },
    tags: ["Augmented Reality", "Pose Estimation", "Mirror Interface", "Education"],
    links: [
      {
        label: "Open project PDF",
        href: "/api/doc/SecondSelf/SecondSelf.pdf",
      },
    ],
    highlights: [
      "Uses a one-way mirror, screen, depth camera, and laptop to create an interactive augmented mirror.",
      "Relies on Intel D435 sensing and Mediapipe pose estimation to align overlays with the user.",
      "Supports application modules for menu navigation, sign language learning, and dance practice.",
      "Treats the mirror as a reusable platform rather than a single-purpose app.",
    ],
    sections: [
      {
        title: "Platform concept",
        description: [
          "Second Self proposes an augmented mirror that can host multiple applications instead of only showing lightweight dashboard widgets. The mirror blends a live reflection with digital overlays that respond to body position and movement.",
          "The ambition is broad but coherent: recreational, medical, and educational modules can all live on top of the same sensing and rendering backbone.",
        ],
        media: [
          {
            type: "image",
            src: "/SecondSelf/architectureDiagram.png",
            alt: "Architecture diagram for Second Self",
            fit: "contain",
          },
        ],
      },
      {
        title: "Sensing and interaction pipeline",
        description: [
          "The platform uses an Intel D435 depth camera to capture the environment and the user, then runs pose estimation to recover body landmarks. Additional modules project those coordinates into reflection space so digital content lines up with the mirror image.",
          "That alignment step is the key design move: it makes the mirror feel less like a screen placed behind glass and more like an interface that lives directly on the body.",
        ],
        media: [
          {
            type: "image",
            src: "/SecondSelf/Signexample.jpeg",
            alt: "Second Self sign language example",
          },
          {
            type: "image",
            src: "/SecondSelf/DanceExample.jpeg",
            alt: "Second Self dance example",
          },
        ],
      },
      {
        title: "Application modules",
        description: [
          "The PDF documents three compelling example applications. A menu lets the user launch modules with dwell-based gesture input. A sign-language module uses pose-based recognition to help people learn a vocabulary of signs. A dance module compares the user against a prerecorded performer and gives immediate feedback.",
          "The folder also includes animated assets for piano and sign experiences, which underline the platform’s focus on guided embodied learning.",
        ],
        media: [
          {
            type: "image",
            src: "/SecondSelf/Sign.gif",
            alt: "Animated sign language module for Second Self",
            fit: "contain",
          },
          {
            type: "image",
            src: "/SecondSelf/Piano.gif",
            alt: "Animated piano module for Second Self",
            fit: "contain",
          },
        ],
      },
    ],
  },
  {
    slug: "finger-spies",
    title: "Finger Spies",
    eyebrow: "1D Role-Play Game",
    year: "2026",
    status: "Built in the MIT 4.043 Design Studio: Interaction Intelligence ecosystem",
    summary:
      "A one-dimensional spy role-play game where players move through a laser corridor while trying to identify the hidden double agent controlling the light.",
    tagline:
      "Minimal interface, maximal tension: one row of pixels, one hidden traitor.",
    preview: {
      type: "image",
      src: "/FingerSpies/HeroPick.png",
      alt: "Preview image for Finger Spies",
    },
    hero: {
      type: "video",
      src: "/FingerSpies/FingerSpies.mp4",
      alt: "Finger Spies demo video",
      poster: "/FingerSpies/HeroPick.png",
    },
    tags: ["Game Design", "p5.js", "Physical Interfaces", "Interaction Design"],
    links: [
      {
        label: "View demo video",
        href: "/FingerSpies/FingerSpies.mp4",
      },
      {
        label: "View GitHub repo",
        href: "https://github.com/Polpii/1DRolePlayGame",
      },
    ],
    highlights: [
      "Turns a single row of pixels into a social deduction game with red-light, green-light timing.",
      "Builds tension through strict 1D interface constraints rather than complex graphics.",
      "Uses clear state-machine logic for selection, play, voting, and win conditions.",
      "Extends the MIT 1D interface design language into a complete role-play system.",
    ],
    sections: [
      {
        title: "Game premise",
        description: [
          "Finger Spies is a spy role-play game played on a one-dimensional interface. Each player advances one pixel at a time while a hidden double agent controls whether the light is safe or lethal.",
          "That setup creates a surprisingly rich social space out of almost nothing: bluffing, hesitation, rhythm, and voting all become legible because the interface is so stripped down.",
        ],
        media: [
          {
            type: "video",
            src: "/FingerSpies/FingerSpies.mp4",
            alt: "Finger Spies gameplay video",
          },
        ],
      },
      {
        title: "Interaction logic",
        description: [
          "The README emphasizes how the project is organized around states and relationships. Player selection, play, vote, and win conditions are all treated explicitly, which keeps the behavior readable and extensible.",
          "That design discipline is one of the strongest aspects of the project: the game feels playful, but its structure is precise.",
        ],
        media: [
          {
            type: "image",
            src: "/FingerSpies/DiagramRules.png",
            alt: "Rules diagram for Finger Spies",
            fit: "contain",
          },
          {
            type: "image",
            src: "/FingerSpies/DesignProcess.png",
            alt: "Design process graphic for Finger Spies",
            fit: "contain",
          },
        ],
      },
      {
        title: "Artifacts and physical framing",
        description: [
          "The local folder includes controller studies, technical drawings, and packaging views that make the project feel like a full interaction-design artifact rather than only a browser prototype.",
          "Using the hero image first and the gameplay video early helps the page communicate that mix of concept, rules, and physical presentation.",
        ],
        media: [
          {
            type: "image",
            src: "/FingerSpies/Controller.png",
            alt: "Controller design for Finger Spies",
            fit: "contain",
          },
          {
            type: "image",
            src: "/FingerSpies/Package.png",
            alt: "Packaging image for Finger Spies",
            fit: "contain",
          },
          {
            type: "image",
            src: "/FingerSpies/TechnicalDrawing.png",
            alt: "Technical drawing for Finger Spies",
            fit: "contain",
          },
        ],
      },
    ],
  },
  {
    slug: "retouche",
    title: "ReTouche: Embodied Representations for Self-Directed Piano Learning",
    eyebrow: "Engagement and HCI",
    year: "2025",
    status: "Accepted at ACM CHI 2026",
    summary:
      "An embodied piano-learning system that projects guidance directly onto a player piano and studies how representation shapes agency and sustained practice.",
    tagline:
      "Keeping learners on the instrument, in the gesture, and inside the feedback loop.",
    preview: {
      type: "image",
      src: "/Retouche/RetoucheTeaser.jpg",
      alt: "Preview image for ReTouche",
    },
    hero: {
      type: "video",
      src: "/Retouche/ReTouche_web.mp4",
      alt: "ReTouche demo video",
      poster: "/Retouche/RetoucheTeaser.jpg",
    },
    tags: ["HCI", "Music Learning", "Embodied Feedback", "AI"],
    links: [
      {
        label: "Open manuscript PDF",
        href: "/api/doc/Retouche/CHI2026_ReTouche.pdf",
      },
    ],
    highlights: [
      "Projects situated, sensorimotor, and social representations directly onto the piano.",
      "Pairs embodied feedback with an AI-based adaptation pipeline from overhead tutorial videos.",
      "Triangulates evidence through comparative observation, longitudinal autoethnography, and an expert focus group.",
    ],
    sections: [
      {
        title: "System",
        description: [
          "ReTouche reframes self-directed piano learning by putting guidance back onto the instrument itself. Projected visuals, moving keys, and control tools work together so learners stay anchored in the embodied task.",
          "The system’s value is not only informational. It changes where attention lives during practice.",
        ],
        media: [
          {
            type: "image",
            src: "/Retouche/DSCF3763.JPG",
            alt: "ReTouche setup in use",
          },
          {
            type: "image",
            src: "/Retouche/RetouchePresentation.png",
            alt: "ReTouche presentation slide",
          },
        ],
      },
      {
        title: "Design evidence",
        description: [
          "The project studies how embodied representations can support agency, attention reorientation, and sustained engagement in learning.",
          "The local assets show both qualitative and quantitative evidence across structured observation, focus groups, and longitudinal use.",
        ],
        media: [
          {
            type: "image",
            src: "/Retouche/CSOResultsRetouche.png",
            alt: "Comparative structured observation results for ReTouche",
            fit: "contain",
          },
          {
            type: "image",
            src: "/Retouche/FocusGroupRetouche.png",
            alt: "Focus group results for ReTouche",
            fit: "contain",
          },
          {
            type: "image",
            src: "/Retouche/LongitudinalStudyResultsRetouche.png",
            alt: "Longitudinal study results for ReTouche",
            fit: "contain",
          },
        ],
      },
      {
        title: "Representation design",
        description: [
          "A major design contribution is the careful differentiation of representation types, and how each one supports a different learning move. The system does not simply show more information; it shapes how the learner interprets and acts on that information.",
        ],
        media: [
          {
            type: "image",
            src: "/Retouche/embodied_representations_features.png",
            alt: "Embodied representations framework for ReTouche",
            fit: "contain",
          },
          {
            type: "image",
            src: "/Retouche/retoucheTeacher.png",
            alt: "Teacher-facing ReTouche view",
          },
          {
            type: "image",
            src: "/Retouche/retoucheLearner.png",
            alt: "Learner-facing ReTouche view",
          },
        ],
      },
    ],
  },
  {
    slug: "hd-emg-ai",
    title: "Deep Learning for Real-Time Neural Drive Decoding",
    eyebrow: "Mechanism and Deep Learning",
    year: "2024",
    status: "Manuscript in preparation",
    summary:
      "A real-time decoding pipeline that predicts continuous finger forces from 224-channel HD-EMG to bridge raw neural signals and useful motor feedback.",
    tagline:
      "From dense muscle signals to interpretable force estimates at real-time latency.",
    preview: {
      type: "image",
      src: "/HDEMG/Arm.png",
      alt: "Preview image for HD-EMG AI project",
    },
    hero: {
      type: "video",
      src: "/HDEMG/demo_S02_FINAL.mp4",
      alt: "HD-EMG AI demo video",
      poster: "/HDEMG/DextrainManipulandum.png",
    },
    tags: ["Neurorehabilitation", "Deep Learning", "HD-EMG", "Biomechanics"],
    links: [
      {
        label: "Open paper draft",
        href: "/api/doc/HDEMG/HDEMG_10_2025.pdf",
      },
      {
        label: "Watch demo video",
        href: "/HDEMG/demo_S02_FINAL.mp4",
      },
    ],
    highlights: [
      "Combines 224-channel HD-EMG with precise force measurement using the Dextrain Manipulandum.",
      "Targets continuous finger-force decoding with latency suitable for biofeedback.",
      "Frames decoding as a translational bridge from raw electrophysiology to assistive interaction.",
    ],
    sections: [
      {
        title: "Measurement platform",
        description: [
          "This project brings together dense muscle sensing and precise force measurement to study continuous finger-force decoding. The instrumentation is a major contribution in itself because it creates the ground truth required for mechanistic modeling.",
        ],
        media: [
          {
            type: "image",
            src: "/HDEMG/DextrainManipulandum.png",
            alt: "Dextrain setup for HD-EMG AI",
            fit: "contain",
          },
          {
            type: "image",
            src: "/HDEMG/Arm.png",
            alt: "HD-EMG sensor placement image",
          },
        ],
      },
      {
        title: "Signal processing and modeling",
        description: [
          "The project explores how high-density EMG can be transformed into continuous estimates of finger force. That makes the signals more interpretable and more actionable for rehabilitation or control contexts.",
          "The overall direction balances predictive accuracy with temporal responsiveness, which is why the real-time framing matters so much.",
        ],
        media: [
          {
            type: "image",
            src: "/HDEMG/MFT.gif",
            alt: "Animated MFT visualization for HD-EMG AI",
            fit: "contain",
          },
          {
            type: "image",
            src: "/HDEMG/FFT.gif",
            alt: "Animated FFT visualization for HD-EMG AI",
            fit: "contain",
          },
        ],
      },
      {
        title: "Current status",
        description: [
          "The materials in the folder position this work as an active research effort aimed at high-fidelity decoding and translational neurorehabilitation use cases.",
        ],
        media: [
          {
            type: "video",
            src: "/HDEMG/demo_S02_FINAL.mp4",
            alt: "HD-EMG AI demo video",
          },
        ],
      },
    ],
  },
  {
    slug: "rhythm-karaoke",
    title: "Rhythm Karaoke: A Novel Method for Rhythmic Imitation of Finger Movements",
    eyebrow: "Measurement and Data",
    year: "2023",
    status: "Accepted at Scientific Reports, Springer Nature (2026)",
    summary:
      "A rhythmic imitation platform for measuring fine motor timing precision with millisecond-level sensitivity and reliable auditory-feedback conditions.",
    tagline:
      "A data-rich timing platform connecting musical structure, imitation, and motor precision.",
    preview: {
      type: "image",
      src: "/RhythmKaraoke/heroPick.JPG",
      alt: "Preview image for Rhythm Karaoke",
    },
    hero: {
      type: "video",
      src: "/RhythmKaraoke/Rhythm Karaoke.mp4",
      alt: "Rhythm Karaoke demo video",
      poster: "/RhythmKaraoke/heroPick.JPG",
    },
    tags: ["Motor Timing", "Measurement", "Music", "Behavioral Research"],
    links: [
      {
        label: "Open paper PDF",
        href: "/api/doc/RhythmKaraoke/CHI_2025.pdf",
      },
    ],
    highlights: [
      "Builds a rhythmic imitation platform with adaptive auditory feedback.",
      "Measures timing precision using mean signed asynchrony, variability, and lag-1 autocorrelation.",
      "Provides a reliable behavioral layer that supports downstream AI and rehabilitation work.",
    ],
    sections: [
      {
        title: "Platform",
        description: [
          "Rhythm Karaoke investigates fine motor timing through a rhythmic imitation setup that combines auditory stimuli and finger-tapping measurement. It turns musical structure into a precise experimental tool.",
          "This project matters because it does not only study performance. It produces a reliable metric engine that can support broader modeling work.",
        ],
        media: [
          {
            type: "video",
            src: "/RhythmKaraoke/Rhythm Karaoke.mp4",
            alt: "Rhythm Karaoke video",
          },
        ],
      },
      {
        title: "Study framing",
        description: [
          "The project examines how melody, semantic content, and feedback shape rhythmic precision and user experience. That makes it both a measurement contribution and a design question about what kinds of stimuli best sustain performance.",
        ],
        media: [
          {
            type: "image",
            src: "/RhythmKaraoke/system.jpg",
            alt: "Rhythm Karaoke system setup",
          },
        ],
      },
    ],
  },
  {
    slug: "policy-town",
    title: "PolicyTown: Does Splitting a Triage Decision Across Agents Hide Bias or Help Catch It?",
    eyebrow: "Multi-Agent AI Safety",
    year: "2026",
    status: "Independent research; simulator, experiment runners, and full results open-sourced on GitHub",
    summary:
      "A multi-agent simulation study testing whether distributing a life-or-death triage decision across a role-differentiated LLM pipeline changes how often bias occurs, and whether an independent audit step actually catches it under capacity pressure.",
    tagline:
      "Splitting the decision doesn't reduce bias. It changes whether anyone catches it.",
    preview: {
      type: "image",
      src: "/PolicyTown/map.png",
      alt: "Preview image for PolicyTown",
      fit: "contain",
    },
    hero: {
      type: "image",
      src: "/PolicyTown/PolicyTown.gif",
      alt: "Animated demo of the PolicyTown simulator running an episode",
      fit: "contain",
    },
    tags: ["Multi-Agent Systems", "AI Safety", "LLM Evaluation", "Simulation"],
    links: [
      {
        label: "Open paper PDF",
        href: "/api/doc/PolicyTown/PolicyTown_ArxivReady.pdf",
      },
      {
        label: "View GitHub repo",
        href: "https://github.com/Polpii/policy-town",
      },
    ],
    highlights: [
      "Runs 192 episodes (2,304 resolved case pairs) on GPT-4o-mini, comparing a single-agent control to a nine-agent pipeline under three independently varied pressure dimensions.",
      "Finds no measurable difference in bias rate between the single-agent and multi-agent pipelines (6.9% vs. 6.1%, p = 0.498).",
      "Shows audit capacity, not agent judgment, decides whether bias is caught: coverage collapses from 100.0% to 65.6% under an overloaded auditor (p < 0.001), while judgment quality on reviewed cases barely moves.",
      "Demonstrates that reordering the audit queue by estimated risk recovers most of the lost coverage under the same capacity constraint (65.6% → 91.7%, p = 0.028).",
    ],
    sections: [
      {
        title: "Why this study exists",
        description: [
          "Prior benchmarking work (KillBench) showed that a single LLM, forced into life-or-death triage decisions, exhibits measurable demographic bias by nationality, religion, body type, and other attributes irrelevant to clinical need. But that result was obtained with one model making an entire decision in a single call, and real deployments rarely work that way: production pipelines split a decision into stages, often with a dedicated review or audit step, on the assumption that decomposing a task and adding independent oversight improves reliability.",
          "PolicyTown asks the question a single-agent benchmark can't answer on its own: when a biased decision is distributed across a role-differentiated pipeline with an explicit audit stage, does the bias become less frequent, more frequent, or simply harder to locate?",
        ],
        media: [
          {
            type: "image",
            src: "/PolicyTown/map.png",
            alt: "The PolicyTown simulation interface during a running episode, showing cases moving through assessment, allocation, and audit toward a fixed-capacity ward",
            fit: "contain",
          },
        ],
      },
      {
        title: "A synthetic disaster-triage simulator, run under pressure",
        description: [
          "Patients arrive over time needing a scarce hospital bed; every case is generated as a twin pair, clinically identical except for one demographic attribute, so any difference in outcome between the two members of a pair can only be explained by that attribute. A single-agent Control condition, where one model assesses, allocates, and audits its own decision, is compared against a nine-agent Multi-agent condition with four Assessors, three Allocators, and two Auditors, on identical generated cases.",
          "Three pressure dimensions are varied independently in a 2×2×2 factorial design: caseload curve (flat or rising arrivals), bed stock (5 or 8 beds), and audit capacity (1 or effectively unlimited reviews per tick). Twelve seeded episodes run per cell, for 192 episodes and 2,304 resolved case pairs, all with zero failed runs.",
        ],
        media: [
          {
            type: "video",
            src: "/PolicyTown/PolicyTown2.mp4",
            alt: "Walkthrough video of the PolicyTown simulator dashboard",
            poster: "/PolicyTown/stats.png",
          },
          {
            type: "image",
            src: "/PolicyTown/stats.png",
            alt: "Live statistics dashboard tracking allocation outcomes, policy verdicts, and matched twin pairs",
            fit: "contain",
          },
        ],
      },
      {
        title: "Coverage collapses before judgment does",
        description: [
          "30.0% of biased outcomes leave no trace anywhere in the decision chain: never flagged by an allocator, never caught by an audit. That share depends heavily on audit capacity, rising to 43.8% when the auditor is overloaded and falling to 18.4% when it isn't.",
          "Decomposing the audit outcome into coverage (was the case reviewed at all?) and judgment (given that it was reviewed, was the bias caught?) shows the effect is driven almost entirely by coverage. The auditor doesn't get worse at its job under pressure; it simply reviews less of the queue.",
        ],
        media: [
          {
            type: "image",
            src: "/PolicyTown/chart_catch_rate.png",
            alt: "Chart showing coverage collapsing under audit load while judgment quality on reviewed cases stays flat",
            fit: "contain",
          },
        ],
      },
      {
        title: "A queueing fix, and honest limits",
        description: [
          "A follow-up experiment reordering the audit queue by estimated risk, prioritizing decisions whose rationale names a protected attribute or that end in denial, instead of first-come-first-served, recovers most of the lost coverage under the same capacity constraint (65.6% → 91.7%, p = 0.028). Catch-rate and silent-bias-rate gains point the same direction but aren't statistically confirmed at this sample size.",
          "The study is transparent about its limits: one model (GPT-4o-mini), modest sample sizes, no adversarial replication, and a pipeline topology chosen to match a specific external benchmark rather than to represent all deployed multi-agent systems. The simulator, experiment runners, and full raw results, including seed-level integrity checks, are public on GitHub.",
        ],
      },
    ],
  },
  {
    slug: "faultline",
    title:
      "FaultLine: Audit Without Verification — When LLM Accountability Layers Relay Rather Than Check",
    eyebrow: "AI Accountability & Auditing",
    year: "2026",
    status: "Submitted to ICLR 2027; pre-registered on OSF (DOI 10.17605/OSF.IO/GBR3V)",
    summary:
      "A pre-registered study of a six-agent, institutionally partitioned LLM pipeline showing that an external auditor reading filed reports adopts the chain's own upstream conclusions instead of verifying them, and that removing a single field in the report schema causes a large, direction-dependent shift in attribution accuracy.",
    tagline:
      "An accountability layer that almost never lies on its own, but happily repeats yours.",
    preview: {
      type: "image",
      src: "/FaultLine/hero_hud.png",
      alt: "Preview image for FaultLine",
    },
    hero: {
      type: "image",
      src: "/FaultLine/hero_hud.png",
      alt: "Hero graphic showing a defect entering a six-link supply chain and an external audit reading only the filed conclusion",
    },
    tags: ["AI Safety", "Multi-Agent Systems", "Pre-Registered Research", "LLM Evaluation"],
    links: [
      {
        label: "Open paper PDF",
        href: "/api/doc/FaultLine/faultline.pdf",
      },
      {
        label: "View GitHub repo",
        href: "https://github.com/Polpii/FaultLine",
      },
    ],
    highlights: [
      "Tests the pre-registered hypothesis that collective-responsibility framing degrades escalation as chain length grows; on 345,600 requests across a six-agent pipeline, the effect is not supported (confirmatory, null result reported first).",
      "Finds the accountability layer fails asymmetrically: zero false allegations across 7,996 clean episodes, yet it names an innocent party in 34.4% to 62.6% of episodes where an upstream agent merely raised a false alarm.",
      "Isolates a single removable field, the chain's own filed conclusion, whose deletion recovers up to +41.2 points of attribution accuracy when that conclusion was wrong, at a cost of up to -14.7 points when it was right.",
      "Replicates the trade-off across a second auditor, two frontier auditor models, and a second domain (a multi-vendor software delivery toolchain), with the harm confirmed in six conditions out of six.",
      "Ships as a fully regenerable synthetic corpus (recorded seeds, hashed generators) with all analysis code, frozen protocols, and derived data released publicly.",
    ],
    sections: [
      {
        title: "Why this study exists",
        description: [
          "Multi-agent LLM pipelines increasingly span organisational boundaries: one company's model prepares a step, another inspects it, another ships it. When a fault reaches the end of such a chain, the question is not whether the system failed, but at which step, under whose control, the fault entered. In deployment, the artifact available to answer that is rarely a full execution trace, it is the reports each agent filed, and a filed report can state a conclusion alongside its observations.",
          "FaultLine holds the record fixed and varies only whether it carries that conclusion, using a pre-registered, institutionally partitioned six-agent pipeline with process-level information boundaries, exactly balanced defect injection, and matched clean twins (345,600 requests across two chain models).",
        ],
        media: [
          {
            type: "image",
            src: "/FaultLine/fig1_three_conditions.png",
            alt: "A defect entering a six-link supply chain; an external audit reading only filed conclusions attributes the fault to the wrong step, and origin-attribution accuracy jumps from 4.1% to 45.2% once the conclusion field is removed",
            fit: "contain",
          },
        ],
      },
      {
        title: "An institutionally partitioned pipeline",
        description: [
          "Six agents each run their own step of a supply-chain process (raw material, manufacture, inspection, freight, distribution, retail intake), with every company identity running as a separate MCP server so that what an agent can see is set by which tools are registered on its server, not by an instruction to disregard visible information. A defect is injected at exactly one of the first five links, exactly balanced across 480 base cases, and an external auditor reviews the six filed reports under conditions that vary its access to the chain's own escalation flags and stated conclusions.",
          "The design is a pre-registered three-factor factorial (principal count, responsibility vs. documentation framing, individual vs. collective allocation) crossed with matched no-defect twins, giving 57,600 episodes per chain model on GPT-4.1 Mini and Claude Haiku 4.5.",
        ],
        media: [
          {
            type: "image",
            src: "/FaultLine/hero_hud.png",
            alt: "HUD-style visualization of the six-link chain, ground truth, and external audit attribution",
          },
        ],
      },
      {
        title: "The accountability layer is asymmetric",
        description: [
          "The auditor originates almost nothing: across 7,996 clean episodes where every agent stayed silent, it raises zero allegations. But it filters upstream error poorly, naming an innocent party in 34.4% and 62.6% of clean episodes where an agent had raised a false alarm, on Claude and GPT chains respectively.",
          "The auditor's answer space is also strongly constrained by what the agents already proposed: reading the filed conclusion, it names an origin from within the set the agents suggested in 95% of episodes. This is relaying more than checking, not that the layer filters nothing, but that its output tracks upstream escalation far more than independent judgment.",
        ],
        media: [
          {
            type: "image",
            src: "/FaultLine/fig4_weak_independence.png",
            alt: "Chart showing the auditor originates almost no allegation on clean episodes but filters upstream false alarms poorly",
            fit: "contain",
          },
          {
            type: "image",
            src: "/FaultLine/fig3_adherence.png",
            alt: "Chart showing the auditor's named origin is drawn from the set of origins agents already proposed in most episodes",
            fit: "contain",
          },
        ],
      },
      {
        title: "One field causally explains most of the failure",
        description: [
          "Deleting exactly one clause from the report, the struck line stating a suspected origin, and nothing else, isolates the cause. Where the chain's own upstream suggestion was wrong, removing that field recovers accuracy from 4.1% to 45.2% on GPT chains (+41.2 points) and from 8.7% to 35.4% on Claude chains (+26.7 points). Where the upstream suggestion was correct, the same deletion instead costs accuracy: 70.5% to 55.7% on GPT chains (-14.7 points) and 80.6% to 71.6% on Claude chains (-9.0 points).",
          "All four intervals exclude zero: both directions of the trade-off are estimated, not merely observed. The finding is therefore not that removing the field is an improvement, it is that the net effect is governed by upstream reliability together with the conditional benefit of suppressing an incorrect conclusion and the conditional cost of suppressing a correct one.",
        ],
        media: [
          {
            type: "image",
            src: "/FaultLine/fig2_tradeoff.png",
            alt: "Bar chart showing removing the conclusion field helps attribution accuracy where the upstream suggestion is wrong and hurts it where the suggestion is correct, for both GPT-4.1 Mini and Claude Haiku 4.5 chains",
            fit: "contain",
          },
        ],
      },
      {
        title: "Replicates across auditors, models, and a second domain",
        description: [
          "The trade-off holds with a second auditor (Gemini 2.5 Flash Lite) on a strict intersection of the same episodes, and with two frontier auditors (GPT-5, Claude Sonnet 5), replicating in three of four cells at conventional significance. It also replicates, and grows larger, in a semantically unrelated second domain: a six-link, multi-vendor software delivery toolchain under a protocol frozen before collection, where removing the field helps by +47.7 and +61.1 points while the measured cost disappears.",
          "The paper is explicit about what this does not establish: not that LLM auditors reason poorly in general (the same auditor reaches 60.3% from raw documentation on the same episodes), and not that the conclusion field is the sole cause. The actionable claim is narrower and, I think, more useful: an accountability layer needs evidence sufficiently independent of the conclusions it verifies, and upstream reliability can be estimated offline before deciding what that layer should carry.",
        ],
        media: [
          {
            type: "image",
            src: "/FaultLine/fig5_second_auditor.png",
            alt: "Dot plot showing the same trade-off replicating in magnitude and direction across two auditors from different developers",
            fit: "contain",
          },
        ],
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

/** Projects sorted by year descending (newest first). */
export const sortedProjects = [...portfolioProjects].sort(
  (a, b) => Number(b.year) - Number(a.year),
);
