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
      <div className="space-y-6 mb-12">
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

      {/* Skills section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "React", "JavaScript", "Python", 
            "Java", "SQL", "Git", 
            "AWS", "Data Structures"
          ].map((skill, index) => (
            <div
              key={skill}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
