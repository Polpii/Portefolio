import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function FaultLinePage() {
  const project = getProjectBySlug("faultline");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
