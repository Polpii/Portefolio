import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function SecondSelfPage() {
  const project = getProjectBySlug("second-self");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
