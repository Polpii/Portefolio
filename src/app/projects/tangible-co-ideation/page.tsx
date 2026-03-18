import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function TangibleCoIdeationPage() {
  const project = getProjectBySlug("tangible-co-ideation");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
