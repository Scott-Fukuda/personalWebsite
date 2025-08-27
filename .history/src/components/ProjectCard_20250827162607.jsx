export default function ProjectCard({ title, description, link }) {
  return (
    <div className="p-4 rounded-2xl shadow bg-white dark:bg-gray-800 hover:scale-105 transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-500 hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}
