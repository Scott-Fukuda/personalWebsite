import { experiences } from "../data/experiences";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Hero section with profile image */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img 
            src="/images/profile.png" 
            alt="Scott Fukuda" 
            className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-blue-500"
          />
        </div>
        <h1 className="text-4xl font-bold mb-6">Welcome</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Hi, I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Scott Fukuda</span> — a Computer Science student at Cornell University.
          I'm passionate about software engineering, machine learning, and building tools that help people.
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="p-6 rounded-2xl shadow bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">{exp.company} • {exp.duration}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
              {exp.description.map((line, j) => (
                <li key={j}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
