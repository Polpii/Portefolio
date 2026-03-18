import ProjectDetailPage from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function RhythmKaraokePage() {
  const project = getProjectBySlug("rhythm-karaoke");

  if (!project) {
    return null;
  }

  return <ProjectDetailPage project={project} />;
}
