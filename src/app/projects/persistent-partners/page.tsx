import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function PersistentPartnersPage() {
  const project = getProjectBySlug("persistent-partners");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
