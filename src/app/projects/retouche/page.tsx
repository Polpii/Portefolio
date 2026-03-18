import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function RetouchePage() {
  const project = getProjectBySlug("retouche");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
