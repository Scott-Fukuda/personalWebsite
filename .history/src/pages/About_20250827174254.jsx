import { useState, useEffect } from "react";

export default function About() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      title: "Computer Science Student",
      description: "Currently pursuing my degree at Cornell University, where I'm passionate about algorithms, data structures, and software engineering principles.",
      image: "🎓",
      color: "from-blue-500 to-purple-600",
      photos: ["/images/ithaca1.jpeg", "/images/ithaca2.jpeg"]
    },
    {
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding elegant solutions. Whether it's optimizing algorithms or designing scalable systems, I'm always up for a good puzzle.",
      image: "🧩",
      color: "from-green-500 to-teal-600",
      photos: ["/images/service1.jpeg", "/images/service2.jpeg"]
    },
    {
      title: "Technology Enthusiast",
      description: "Always exploring new technologies and frameworks. From machine learning to web development, I enjoy staying current with the latest innovations.",
      image: "⚡",
      color: "from-yellow-500 to-orange-600",
      photos: ["/images/music1.JPG", "/images/music2.png"]
    },
    {
      title: "Adventure Seeker",
      description: "When I'm not coding, you'll find me hiking, exploring new places, or discovering new music. Life is about balance and new experiences.",
      image: "🏔️",
      color: "from-red-500 to-pink-600",
      photos: ["/images/adventure.jpeg", "/images/adventure2.jpeg"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        
        {/* Profile section with image */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/profile.png" 
              alt="Scott Fukuda" 
              className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-blue-500"
            />
          </div>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Scott Fukuda</span>, 
            currently studying Computer Science at Cornell University. I enjoy solving problems, 
            designing scalable systems, and experimenting with new technologies. 
            Outside of coding, I love music, hiking, and exploring new places.
          </p>
        </div>

        {/* Animated sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left side - Animated content */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl shadow-lg transition-all duration-500 transform ${
                  activeSection === index
                    ? 'scale-105 bg-gradient-to-r ' + section.color + ' text-white'
                    : 'bg-white dark:bg-gray-800 hover:scale-102'
                }`}
                onClick={() => setActiveSection(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{section.image}</div>
                  <div>
                    <h3 className={`text-xl font-semibold ${
                      activeSection === index ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {section.title}
                    </h3>
                    <p className={`mt-2 ${
                      activeSection === index ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Large animated display with photos */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Main circular display */}
              <div className={`w-64 h-64 rounded-full flex items-center justify-center text-8xl transition-all duration-700 transform ${
                activeSection === 0 ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-110' :
                activeSection === 1 ? 'bg-gradient-to-br from-green-500 to-teal-600 scale-110' :
                activeSection === 2 ? 'bg-gradient-to-br from-yellow-500 to-orange-600 scale-110' :
                'bg-gradient-to-br from-red-500 to-pink-600 scale-110'
              } shadow-2xl`}>
                {sections[activeSection].image}
              </div>
              
              {/* Photo gallery overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {sections[activeSection].photos.map((photo, photoIndex) => (
                    <img
                      key={photoIndex}
                      src={photo}
                      alt={`${sections[activeSection].title} photo ${photoIndex + 1}`}
                      className="w-20 h-20 rounded-lg object-cover shadow-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo gallery section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sections.map((section, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-sm font-semibold text-center text-gray-700 dark:text-gray-300">
                  {section.title}
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {section.photos.map((photo, photoIndex) => (
                    <img
                      key={photoIndex}
                      src={photo}
                      alt={`${section.title} photo ${photoIndex + 1}`}
                      className="w-full h-24 rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-200"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React", "JavaScript", "Python", "Java", 
              "Node.js", "SQL", "Git", "AWS",
              "Machine Learning", "Data Structures", "Algorithms", "System Design"
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
