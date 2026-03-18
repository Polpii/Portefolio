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
    status: "Submitted to the ACM Designing Interactive Systems 2026 Student Design Competition",
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
      src: "/Tangible/Tangible co-ideation final video V4.mp4",
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
            src: "/Tangible/Tangible co-ideation final video V4.mp4",
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
      type: "image",
      src: "/IPheromone/HeroPick.jpeg",
      alt: "Hero image showing the IPheromone prototype in use",
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
      "Combines a web app, Raspberry Pi wearable, and BLE scent bridge into a single social computing system.",
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
          "According to the repository, the project has three main pieces: a Next.js web app for profiles and agent logic, a Raspberry Pi wearable client for voice and physical feedback, and a BLE scent bridge that translates web requests into diffuser commands.",
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
      type: "image",
      src: "/FingerSpies/HeroPick.png",
      alt: "Hero image for Finger Spies",
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
      type: "image",
      src: "/Retouche/RetoucheTeaser.jpg",
      alt: "Hero image for ReTouche",
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
      type: "image",
      src: "/HDEMG/DextrainManipulandum.png",
      alt: "Dextrain Manipulandum setup for HD-EMG AI project",
      fit: "contain",
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
    status: "Submitted to Scientific Reports, Springer Nature",
    summary:
      "A rhythmic imitation platform for measuring fine motor timing precision with millisecond-level sensitivity and reliable auditory-feedback conditions.",
    tagline:
      "A data-rich timing platform connecting musical structure, imitation, and motor precision.",
    preview: {
      type: "video",
      src: "/RhythmKaraoke/Rhythm Karaoke.mp4",
      alt: "Preview video for Rhythm Karaoke",
    },
    hero: {
      type: "video",
      src: "/RhythmKaraoke/Rhythm Karaoke.mp4",
      alt: "Rhythm Karaoke demo video",
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
