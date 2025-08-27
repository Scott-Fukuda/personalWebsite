import { useState, useEffect } from "react";

export default function About() {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState("");

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index) => {
    setActiveSection(index);
    setSelectedPhotos(sections[index].photos);
    setSelectedTitle(sections[index].title);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const sections = [
    {
      title: "Computer Science Student",
      description: "Currently pursuing my degree at Cornell University, where I'm passionate about algorithms, data structures, and software engineering principles.",
      image: "🎓",
      color: "from-blue-500 to-purple-600",
      photos: ["/images/ithaca1.jpeg", "/images/ithaca2.jpeg"]
    },
    {
      title: "Music Enthusiast",
      description: "I love writing and producing music. I also play electric guitar at my church, and at Cru, Cornell's Christian fellowship.",
      image: "🎸",
      color: "from-green-500 to-teal-600"
    },    {      photos: ["/images/service1.jpeg", "/images/service2.jpeg"]
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
                className={`p-6 rounded-2xl shadow-lg transition-all duration-500 transform cursor-pointer ${
                  activeSection === index
                    ? 'scale-105 bg-gradient-to-r ' + section.color + ' text-white'
                    : 'bg-white dark:bg-gray-800 hover:scale-102 hover:shadow-xl'
                }`}
                onClick={() => handleCardClick(index)}
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
                <div className="mt-4 text-sm opacity-75">
                  Click to view photos →
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Large animated display */}
          <div className="flex items-center justify-center">
            <div className={`w-64 h-64 rounded-full flex items-center justify-center text-8xl transition-all duration-700 transform ${
              activeSection === 0 ? 'bg-gradient-to-br from-blue-500 to-purple-600 scale-110' :
              activeSection === 1 ? 'bg-gradient-to-br from-green-500 to-teal-600 scale-110' :
              activeSection === 2 ? 'bg-gradient-to-br from-yellow-500 to-orange-600 scale-110' :
              'bg-gradient-to-br from-red-500 to-pink-600 scale-110'
            } shadow-2xl`}>
              {sections[activeSection].image}
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
                      className="w-full h-24 rounded-lg object-cover shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
                      onClick={() => {
                        setSelectedPhotos([photo]);
                        setSelectedTitle(section.title);
                        setShowModal(true);
                      }}
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

      {/* Photo Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {selectedTitle}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedPhotos.map((photo, index) => (
                  <div key={index} className="space-y-2">
                    <img
                      src={photo}
                      alt={`${selectedTitle} photo ${index + 1}`}
                      className="w-full rounded-lg shadow-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
