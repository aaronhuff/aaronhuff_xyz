
import { useEffect, useState } from "react";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from 'next/link';

const roles = [
  "Network Automation Engineer",
  "Cloud Solutions Architect",
  "Python Developer",
];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 1500;

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      // If deleting, slice from the end.
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, switch to next role and start typing
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        // If typing, add characters
        if (charIndex < currentRole.length) {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-16">

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-6 pt-16">
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
            <Link href="/#projects">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
            </Link>
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
