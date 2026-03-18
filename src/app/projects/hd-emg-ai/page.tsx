import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function HDEMGAIPage() {
  const project = getProjectBySlug("hd-emg-ai");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
