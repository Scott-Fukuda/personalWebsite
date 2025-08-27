import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <p className="text-lg mb-8">
        Hi, I’m <span className="font-semibold">Scott Fukuda</span> — a Computer Science student at Cornell University.
        I’m passionate about software engineering, machine learning, and building tools that help people.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
