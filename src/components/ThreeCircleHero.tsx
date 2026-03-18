"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Zone =
  | "health"
  | "design"
  | "ai"
  | "health-design"
  | "health-ai"
  | "design-ai"
  | "center"
  | null;

const zoneContent: Record<
  Exclude<Zone, null>,
  { label: string; projects: { name: string; href: string }[] }
> = {
  health: {
    label: "Health",
    projects: [
      { name: "HD-EMG Decoding", href: "/projects/hd-emg-ai" },
      { name: "Rhythm Karaoke", href: "/projects/rhythm-karaoke" },
    ],
  },
  design: {
    label: "Design",
    projects: [
      { name: "Tangible Co-Ideation", href: "/projects/tangible-co-ideation" },
      { name: "Finger Spies", href: "/projects/finger-spies" },
      { name: "Second Self", href: "/projects/second-self" },
    ],
  },
  ai: {
    label: "AI",
    projects: [
      { name: "IPheromone", href: "/projects/ipheromone" },
    ],
  },
  "health-design": {
    label: "Health + Design",
    projects: [
      { name: "ReTouche", href: "/projects/retouche" },
    ],
  },
  "health-ai": {
    label: "Health + AI",
    projects: [
      { name: "HD-EMG Decoding", href: "/projects/hd-emg-ai" },
    ],
  },
  "design-ai": {
    label: "Design + AI",
    projects: [
      { name: "Tangible Co-Ideation", href: "/projects/tangible-co-ideation" },
      { name: "IPheromone", href: "/projects/ipheromone" },
    ],
  },
  center: {
    label: "Where it all meets",
    projects: [],
  },
};

// SVG geometry — larger circles
const R = 140;
const TOP = { cx: 250, cy: 165 };
const BL = { cx: 168, cy: 310 };
const BR = { cx: 332, cy: 310 };

export default function ThreeCircleHero() {
  const [active, setActive] = useState<Zone>(null);
  const router = useRouter();

  const circleStroke = (zone: Zone) =>
    active === zone ? "#6b7280" : "#d1d5db";
  const circleFill = (zone: Zone) =>
    active === zone ? "#f9fafb" : "transparent";

  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Gradient blobs */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[22deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8 lg:py-28">
        {/* Left — text */}
        <div className="max-w-xl">
          <p className="text-sm text-gray-500">
            HCI Researcher &middot; Embodied Interaction &middot; Neurorehabilitation
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            Paul-Peter Arslan
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-500">
            I design interactions that help people believe in their own
            potential — from embodied learning systems to AI-augmented
            rehabilitation tools.
          </p>

          <nav className="mt-8 flex gap-6 text-sm">
            <Link
              href="#projects"
              className="font-medium text-gray-950 underline decoration-gray-300 underline-offset-4 transition hover:decoration-gray-950"
            >
              Projects
            </Link>
            <Link
              href="/publications"
              className="text-gray-500 transition hover:text-gray-950"
            >
              Publications
            </Link>
            <Link
              href="/about"
              className="text-gray-500 transition hover:text-gray-950"
            >
              About
            </Link>
          </nav>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-gray-400">
            <li>Human-Computer Interaction</li>
            <li>Embodied Design</li>
            <li>Health &amp; Rehabilitation</li>
            <li>AI</li>
          </ul>
        </div>

        {/* Right — Interactive Venn diagram (desktop only) */}
        <div className="hidden items-center justify-center lg:flex">
          <div className="flex flex-col items-center gap-4 w-full">
            <svg
              viewBox="0 0 500 480"
              className="w-full max-w-[460px]"
              onMouseLeave={() => setActive(null)}
            >
              {/* Clip paths for intersections */}
              <defs>
                <clipPath id="clip-health">
                  <circle cx={TOP.cx} cy={TOP.cy} r={R} />
                </clipPath>
                <clipPath id="clip-design">
                  <circle cx={BL.cx} cy={BL.cy} r={R} />
                </clipPath>
                <clipPath id="clip-ai">
                  <circle cx={BR.cx} cy={BR.cy} r={R} />
                </clipPath>
              </defs>

              {/* Circle outlines */}
              <circle
                cx={TOP.cx} cy={TOP.cy} r={R}
                fill={circleFill("health")}
                stroke={circleStroke("health")}
                strokeWidth="1"
              />
              <circle
                cx={BL.cx} cy={BL.cy} r={R}
                fill={circleFill("design")}
                stroke={circleStroke("design")}
                strokeWidth="1"
              />
              <circle
                cx={BR.cx} cy={BR.cy} r={R}
                fill={circleFill("ai")}
                stroke={circleStroke("ai")}
                strokeWidth="1"
              />

              {/* Intersection zones — invisible hit areas */}
              {/* Health only (top area outside overlaps) */}
              <circle
                cx={TOP.cx} cy={TOP.cy - 30} r={50}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setActive("health")}
              />
              {/* Design only (bottom-left) */}
              <circle
                cx={BL.cx - 30} cy={BL.cy + 20} r={50}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setActive("design")}
              />
              {/* AI only (bottom-right) */}
              <circle
                cx={BR.cx + 30} cy={BR.cy + 20} r={50}
                fill="transparent"
                className="cursor-pointer"
                onMouseEnter={() => setActive("ai")}
              />

              {/* Health + Design intersection (left overlap) */}
              <g clipPath="url(#clip-health)">
                <circle
                  cx={BL.cx} cy={BL.cy} r={R}
                  fill={active === "health-design" ? "#f3f4f6" : "transparent"}
                  className="cursor-pointer"
                  onMouseEnter={() => setActive("health-design")}
                />
              </g>
              {/* Health + AI intersection (right overlap) */}
              <g clipPath="url(#clip-health)">
                <circle
                  cx={BR.cx} cy={BR.cy} r={R}
                  fill={active === "health-ai" ? "#f3f4f6" : "transparent"}
                  className="cursor-pointer"
                  onMouseEnter={() => setActive("health-ai")}
                />
              </g>
              {/* Design + AI intersection (bottom overlap) */}
              <g clipPath="url(#clip-design)">
                <circle
                  cx={BR.cx} cy={BR.cy} r={R}
                  fill={active === "design-ai" ? "#f3f4f6" : "transparent"}
                  className="cursor-pointer"
                  onMouseEnter={() => setActive("design-ai")}
                />
              </g>

              {/* Center intersection — triple overlap, goes to About */}
              <g clipPath="url(#clip-health)">
                <g clipPath="url(#clip-design)">
                  <circle
                    cx={BR.cx} cy={BR.cy} r={R}
                    fill={active === "center" ? "#e5e7eb" : "#f3f4f6"}
                    className="cursor-pointer"
                    onMouseEnter={() => setActive("center")}
                    onClick={() => router.push("/about")}
                  />
                </g>
              </g>

              {/* Labels — positioned in the pure zones */}
              <text
                x={TOP.cx} y={TOP.cy - 48}
                textAnchor="middle"
                className={`text-[12px] font-medium uppercase tracking-[0.1em] select-none ${
                  active === "health" || active === "health-design" || active === "health-ai" || active === "center"
                    ? "fill-gray-700" : "fill-gray-400"
                }`}
              >
                Health
              </text>
              <text
                x={BL.cx - 28} y={BL.cy + 40}
                textAnchor="middle"
                className={`text-[12px] font-medium uppercase tracking-[0.1em] select-none ${
                  active === "design" || active === "health-design" || active === "design-ai" || active === "center"
                    ? "fill-gray-700" : "fill-gray-400"
                }`}
              >
                Design
              </text>
              <text
                x={BR.cx + 28} y={BR.cy + 40}
                textAnchor="middle"
                className={`text-[12px] font-medium uppercase tracking-[0.1em] select-none ${
                  active === "ai" || active === "health-ai" || active === "design-ai" || active === "center"
                    ? "fill-gray-700" : "fill-gray-400"
                }`}
              >
                AI
              </text>

              {/* Center label */}
              {!active && (
                <text
                  x="250" y="265"
                  textAnchor="middle"
                  className="fill-gray-400 text-[11px] select-none"
                >
                  <tspan x="250" dy="0">Hover to explore</tspan>
                </text>
              )}
              {active === "center" && (
                <text
                  x="250" y="265"
                  textAnchor="middle"
                  className="fill-gray-600 text-[11px] font-medium select-none cursor-pointer"
                  onClick={() => router.push("/about")}
                >
                  About me →
                </text>
              )}

              {/* Intersection labels */}
              {active === "health-design" && (
                <text x="195" y="240" textAnchor="middle" className="fill-gray-500 text-[10px] select-none">
                  Health + Design
                </text>
              )}
              {active === "health-ai" && (
                <text x="305" y="240" textAnchor="middle" className="fill-gray-500 text-[10px] select-none">
                  Health + AI
                </text>
              )}
              {active === "design-ai" && (
                <text x="250" y="340" textAnchor="middle" className="fill-gray-500 text-[10px] select-none">
                  Design + AI
                </text>
              )}
            </svg>

            {/* Project links under diagram — appear on hover */}
            <div className="h-16 w-full max-w-[460px]">
              {active && active !== "center" && zoneContent[active].projects.length > 0 && (
                <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-[13px]">
                  {zoneContent[active].projects.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="text-gray-600 underline decoration-gray-200 underline-offset-4 transition hover:text-gray-950 hover:decoration-gray-950"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
              {active === "center" && (
                <p className="text-center text-[13px] text-gray-500">
                  Click to learn more about my work
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 top-[calc(100%-12rem)] -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-15 sm:left-[calc(50%+20rem)] sm:w-[62rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
