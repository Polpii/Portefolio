"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";

import type { PortfolioProject } from "@/data/portfolioProjects";

type ProjectPreviewCardProps = {
  project: PortfolioProject;
};

function normalizeAssetPath(path: string) {
  return path.startsWith("/") ? encodeURI(path) : path;
}

export default function ProjectPreviewCard({
  project,
}: ProjectPreviewCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  const media = project.preview;
  const src = normalizeAssetPath(media.src);
  const poster = media.poster ? normalizeAssetPath(media.poster) : undefined;
  const isVideo = media.type === "video";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/60"
      onMouseEnter={isVideo ? handleMouseEnter : undefined}
      onMouseLeave={isVideo ? handleMouseLeave : undefined}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
        {isVideo ? (
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img
            src={src}
            alt={media.alt}
            className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${
              media.fit === "contain" ? "object-contain" : "object-cover"
            }`}
            loading="lazy"
          />
        )}

        <div className="absolute left-3 top-3">
          <span className="rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-gray-600 backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        {isVideo && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-sm sm:transition-opacity sm:group-hover:opacity-0">
            <svg className="h-2.5 w-2.5" viewBox="0 0 12 12" fill="currentColor">
              <path d="M4 2.5v7l5.5-3.5L4 2.5z" />
            </svg>
            <span className="hidden sm:inline">Hover to play</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="space-y-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
            {project.eyebrow}
          </p>
          <h3 className="text-lg font-semibold leading-snug tracking-tight text-gray-950 transition-colors group-hover:text-gray-600">
            {project.title}
          </h3>
        </div>

        <p className="line-clamp-2 text-[13px] leading-relaxed text-gray-500">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-50 px-2.5 py-0.5 text-[11px] font-medium text-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
