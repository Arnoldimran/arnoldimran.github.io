import { Github } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 p-1 animate-fade-in bg-white">
              <img
                src="/lovable-uploads/8bd6b097-63bd-4bec-951c-efbbb2322488.png"
                alt="Arnold Imuran"
                className="w-full h-full object-cover rounded-full bg-white"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
                  backgroundColor: 'white'
                }}
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Arnold <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Imuran</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl">
              Cybersecurity Specialist & ML Engineer
            </p>
            
            <p className="text-lg text-gray-400 max-w-4xl leading-relaxed">
              Computer Science graduate passionate about building solutions that solve, secure, and simplify. 
              Specializing in cybersecurity, machine learning, and software development with a hands-on approach to real-world challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              
              <a
                href="https://github.com/ArnoldImran"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-8 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-white hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
