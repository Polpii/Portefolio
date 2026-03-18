import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function IPheromonePage() {
  const project = getProjectBySlug("ipheromone");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
