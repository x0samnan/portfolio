import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ["Home", "About", "Experience", "Academics", "Resume", "Contact"];
  
  return (
    <nav className="fixed top-0 w-full bg-black/5 backdrop-blur-lg border-b border-white/10 text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with enhanced gradient and hover effect */}
        <a 
          href="#" 
          className="text-2xl font-bold relative group"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent 
                         transition-all duration-300 group-hover:from-blue-500 group-hover:via-purple-600 group-hover:to-pink-600">
            <img
              src="/logo.png"
              width={60} 
            />
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                         transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Menu with improved hover effects */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setActiveItem(item.toLowerCase())}
              className="relative group py-2"
            >
              <span className={`text-sm font-medium transition-colors duration-300
                             ${activeItem === item.toLowerCase() ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                {item}
              </span>
              <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transform origin-left transition-all duration-300
                             bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
                             ${activeItem === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}>
              </span>
            </a>
          ))}
        </div>

        {/* Enhanced Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                           ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
              <Menu className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
            </span>
            <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300
                           ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              <X className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
            </span>
          </div>
        </button>
      </div>

      {/* Enhanced Mobile Menu with smooth transitions */}
      <div 
        className={`md:hidden fixed inset-x-0 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-lg
                   transition-all duration-300 ease-in-out
                   ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
      >
        <div className="p-6 space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => {
                setIsOpen(false);
                setActiveItem(item.toLowerCase());
              }}
              className="block text-center relative group"
            >
              <span className={`text-lg font-medium transition-colors duration-300
                             ${activeItem === item.toLowerCase() ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                {item}
              </span>
              <span className="block h-0.5 mt-1 rounded-full transform origin-center transition-all duration-300
                             bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 scale-x-0
                             group-hover:opacity-100 group-hover:scale-x-100">
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
