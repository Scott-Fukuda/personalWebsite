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
      description: "I am currently pursuing my degree at Cornell University. Ithaca is GORGES!",
      image: "🎓",
      color: "from-blue-500 to-purple-600",
      photos: ["/images/ithaca1.jpeg", "/images/ithaca2.jpeg"]
    },
    {
      title: "Music Enthusiast",
      description: "I love writing and producing music. I also play electric guitar at my church, and at Cru, Cornell's Christian fellowship.",
      image: "🎸",
      color: "from-green-500 to-teal-600",
      photos: ["/images/music1.JPG", "/images/music2.png"]
    },
    {
      title: "Giving Back",
      description: "I have been blessed with much. It brings me joy to give back to my communities, whether Ithaca, my church, or Cornell.",
      image: "🤲",
      color: "from-yellow-500 to-orange-600",
      photos: ["/images/service1.jpeg", "/images/service2.jpeg"]
    },
    {
      title: "Adventure Seeker",
      description: "When I'm not coding, you'll find me hiking, exploring new places, or going on runs with friends.",
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
                onClick={() => setActiveSection(index)}
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

          {/* Right side - Photos for active section */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {sections[activeSection].title}
                </h3>
                <div className="text-6xl mb-4">
                  {sections[activeSection].image}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {sections[activeSection].photos.map((photo, photoIndex) => (
                  <div key={photoIndex} className="aspect-square">
                    <img
                      src={photo}
                      alt={`${sections[activeSection].title} photo ${photoIndex + 1}`}
                      className="w-full h-full rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
