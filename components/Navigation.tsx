
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MotionLink = motion(Link);

const Navigation = () => {
  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            aaronhuff.xyz
          </Link>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <MotionLink key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors" whileHover={{ scale: 1.1 }}>
                {link.label}
              </MotionLink>
            ))}
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-gray-300 hover:text-white">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-slate-900/80 border-r border-white/10 text-white">
                <div className="flex flex-col space-y-8 pt-12">
                  {navLinks.map((link) => (
                    <SheetTrigger asChild key={link.href}>
                        <MotionLink href={link.href} className="text-gray-300 hover:text-white transition-colors text-2xl" whileHover={{ scale: 1.05 }}>
                          {link.label}
                        </MotionLink>
                    </SheetTrigger>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
