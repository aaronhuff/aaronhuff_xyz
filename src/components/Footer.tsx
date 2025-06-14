
import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-0">
            aaronhuff.xyz
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com/aaronhuff" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/aaronhuff/" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:info@aaronhuff.xyz" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Aaron Huff. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
