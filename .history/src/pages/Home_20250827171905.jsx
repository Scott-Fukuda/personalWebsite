import { experiences } from "../data/experiences";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome</h1>
      <p className="text-lg mb-8">
        Hi, I'm <span className="font-semibold">Scott Fukuda</span> — a Computer Science student at Cornell University.
        I'm passionate about software engineering, machine learning, and building tools that help people.
      </p>

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
    </div>
  );
}
