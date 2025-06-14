
interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            aaronhuff.xyz
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
