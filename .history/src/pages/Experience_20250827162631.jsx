import { experiences } from "../data/experiences";

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      {experiences.map((exp, i) => (
        <div key={i} className="mb-6 p-4 rounded-2xl shadow bg-white dark:bg-gray-800">
          <h2 className="text-xl font-semibold">{exp.role}</h2>
          <p className="text-gray-500">{exp.company} • {exp.duration}</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            {exp.description.map((line, j) => (
              <li key={j}>{line}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
