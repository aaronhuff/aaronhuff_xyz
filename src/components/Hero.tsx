
import { useEffect, useState } from "react";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    "Network Automation Engineer",
    "Cloud Native Developer",
    "Infrastructure as Code Specialist",
    "DevOps Engineer"
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
          setDisplayText("");
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce" style={{animationDuration: '8s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-6 mt-12">
            <pre className="text-lg md:text-2xl font-mono font-bold leading-none">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
{`  █████╗  █████╗ ██████╗  ██████╗ ███╗   ██╗
 ██╔══██╗██╔══██╗██╔══██╗██╔═══██╗████╗  ██║
 ███████║███████║██████╔╝██║   ██║██╔██╗ ██║
 ██╔══██║██╔══██║██╔══██╗██║   ██║██║╚██╗██║
 ██║  ██║██║  ██║██║  ██║╚██████╔╝██║ ╚████║
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

 ██╗  ██╗██╗   ██╗███████╗███████╗
 ██║  ██║██║   ██║██╔════╝██╔════╝
 ███████║██║   ██║█████╗  █████╗  
 ██╔══██║██║   ██║██╔══╝  ██╔══╝  
 ██║  ██║╚██████╔╝██║     ██║     
 ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝     `}
              </span>
            </pre>
          </div>
          <div className="h-16 md:h-20 mb-8">
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about automating network infrastructure and building cloud-native solutions 
            that scale. I transform complex network challenges into elegant Python-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
            <a
              href="https://storage.googleapis.com/ahuff/man-page-aaronhuff.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button 
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
