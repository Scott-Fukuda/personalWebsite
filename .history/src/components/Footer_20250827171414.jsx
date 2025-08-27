export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-12">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-300">
            © 2024 Scott Fukuda. All rights reserved.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/Scott-Fukuda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
