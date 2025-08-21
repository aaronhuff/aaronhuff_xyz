
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            aaronhuff.xyz
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link href="/#projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
