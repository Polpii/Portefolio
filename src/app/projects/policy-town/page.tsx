import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function PolicyTownPage() {
  const project = getProjectBySlug("policy-town");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
