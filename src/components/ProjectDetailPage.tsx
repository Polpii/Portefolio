import Link from "next/link";

import type { PortfolioProject, ProjectMedia } from "@/data/portfolioProjects";

type ProjectDetailPageProps = {
  project: PortfolioProject;
};

function normalizeAssetPath(path: string) {
  return path.startsWith("/") ? encodeURI(path) : path;
}

function MediaBlock({
  media,
  priority = false,
  className = "",
}: {
  media: ProjectMedia;
  priority?: boolean;
  className?: string;
}) {
  const src = normalizeAssetPath(media.src);
  const poster = media.poster ? normalizeAssetPath(media.poster) : undefined;

  if (media.type === "video") {
    return (
      <video
        className={`w-full rounded-xl border border-black/5 bg-[#0f172a] ${className}`}
        controls
        autoPlay={priority}
        muted={priority}
        loop={priority}
        playsInline
        preload="metadata"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        {media.alt}
      </video>
    );
  }

  return (
    <img
      src={src}
      alt={media.alt}
      className={`h-full w-full rounded-xl border border-black/5 bg-white ${media.fit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      loading={priority ? "eager" : "lazy"}
    />
  );
}

function ExternalLinkButton({ href, label }: { href: string; label: string }) {
  const normalizedHref = href.startsWith("/") ? normalizeAssetPath(href) : href;

  return (
    <a
      href={normalizedHref}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition hover:border-gray-900"
    >
      {label}
    </a>
  );
}

export default function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <div className="bg-white text-gray-950">
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6 py-12 lg:px-8 lg:py-16">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-gray-600 transition hover:text-gray-950"
          >
            <span aria-hidden="true" className="mr-2">
              ←
            </span>
            Back to portfolio
          </Link>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
              <span>{project.eyebrow}</span>
              <span>{project.year}</span>
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <ExternalLinkButton key={link.label} href={link.href} label={link.label} />
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-gray-500">{project.status}</p>
          </div>

          <div className="mt-10 space-y-4">
            <MediaBlock media={project.hero} priority className="aspect-video w-full" />
            {project.hero.caption ? (
              <p className="text-sm text-gray-500">{project.hero.caption}</p>
            ) : null}
          </div>

          <div className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                Overview
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950">
                {project.tagline}
              </h2>
            </div>
            <ul className="space-y-4 text-sm leading-7 text-gray-600">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-16 px-6 lg:px-8">
          {project.sections.map((section) => (
            <section
              key={section.title}
              className="grid gap-8 border-t border-gray-200 pt-10 grid-cols-1 lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-gray-950">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-8 text-gray-600">
                  {section.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {section.media?.map((media) => (
                  <figure
                    key={`${section.title}-${media.src}`}
                    className={`${media.type === "video" || (section.media && section.media.length === 1) ? "sm:col-span-2" : ""}`}
                  >
                    <MediaBlock media={media} className={media.type === "video" ? "w-full" : "aspect-video w-full"} />
                    {media.caption ? (
                      <figcaption className="px-1 pt-3 text-sm text-gray-500">
                        {media.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
