import ProjectPreviewCard from "@/components/ProjectPreviewCard";
import ThreeCircleHero from "@/components/ThreeCircleHero";
import { sortedProjects } from "@/data/portfolioProjects";

export default function Home() {
  return (
    <div className="bg-white">
      <ThreeCircleHero />

      <section id="projects" className="border-t border-gray-100 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-2xl font-bold tracking-tight text-gray-950 sm:text-3xl">
            Projects
          </h2>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {sortedProjects.map((project) => (
              <ProjectPreviewCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-gray-400 mb-4">
            Collaborations &amp; affiliations
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <span>MIT Media Lab</span>
            <span className="text-gray-300">·</span>
            <span>IFT — Institute for Future Technologies</span>
            <span className="text-gray-300">·</span>
            <span>INSERM IPNP</span>
            <span className="text-gray-300">·</span>
            <span>Institut du Cerveau, Paris</span>
            <span className="text-gray-300">·</span>
            <span>KTH Royal Institute of Technology, Sweden</span>
            <span className="text-gray-300">·</span>
            <span>University of Oxford</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
            <div>
              <h2 className="text-lg font-bold tracking-tight text-gray-950">
                Open to collaborations
              </h2>
              <ul className="mt-3 space-y-1 text-sm text-gray-500">
                <li>
                  <a href="mailto:paulpeterarslan@gmail.com" className="transition hover:text-gray-950">
                    paulpeterarslan@gmail.com
                  </a>
                </li>
                <li>
                  <a href="mailto:paul-peter.arslan@devinci.fr" className="transition hover:text-gray-950">
                    paul-peter.arslan@devinci.fr
                  </a>
                </li>
                <li>
                  <a href="mailto:polpii97@mit.edu" className="transition hover:text-gray-950">
                    polpii97@mit.edu
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-end gap-5 text-sm">
              <a
                href="https://github.com/Polpii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-gray-950"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/paul-peter-arslan-6442892a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-gray-950"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
