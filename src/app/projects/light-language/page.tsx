import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function LightLanguagePage() {
  const project = getProjectBySlug("light-language");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
