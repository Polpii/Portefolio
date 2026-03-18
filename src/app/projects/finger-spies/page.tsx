import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function FingerSpiesPage() {
  const project = getProjectBySlug("finger-spies");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
