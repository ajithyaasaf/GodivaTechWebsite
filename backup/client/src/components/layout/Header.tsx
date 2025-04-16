import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import logoImg from "@/assets/godiva-tech-logo.png";

// Navigation menu data structure
const navItems = [
  { name: "Home", path: "/", type: "link" },
  { name: "Services", path: "/services", type: "link" },
  { name: "About Us", path: "/about", type: "link" },
  { name: "Portfolio", path: "/portfolio", type: "link" },
  { name: "Testimonials", path: "/testimonials", type: "link" },
  { name: "Blog", path: "/blog", type: "link" },
  { name: "Contact Us", path: "/contact", type: "button" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (currentPath !== '/') {
      setCurrentPath('/');
      // Allow time for navigation before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMobileMenu();
  };

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md py-2' : 'shadow-sm py-4'}`}>
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/">
              <div onClick={closeMobileMenu} className="flex items-center cursor-pointer">
                <img src={logoImg} alt="Godiva Tech Logo" className="h-10 w-auto" />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.type === "button" ? (
                <div key={index} className="ml-4">
                  <Link href={item.path}>
                    <button className="px-6 py-2 bg-primary text-white font-inter font-medium rounded-full hover:bg-blue-600 transition-colors shadow-sm hover:shadow-md">
                      {item.name}
                    </button>
                  </Link>
                </div>
              ) : (
                (
                  <div key={index}>
                    <Link href={item.path}>
                      <div className={`font-inter font-medium transition-colors relative group cursor-pointer ${
                        currentPath === item.path ? 'text-primary' : 'text-secondary hover:text-primary'
                      }`}>
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </div>
                    </Link>
                  </div>
                )
              )
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-all duration-300 ease-in-out z-50 overflow-y-auto`}>
          <div className="flex flex-col p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/">
                <div onClick={closeMobileMenu} className="flex items-center cursor-pointer">
                  <img src={logoImg} alt="Godiva Tech Logo" className="h-8 w-auto" />
                </div>
              </Link>
              <button onClick={closeMobileMenu} className="p-2 rounded-md hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item, index) => (
                item.type === "button" ? (
                  <div key={index}>
                    <Link href={item.path}>
                      <button 
                        onClick={closeMobileMenu} 
                        className="block w-full px-6 py-3 mt-4 bg-primary text-white font-inter font-medium rounded-full hover:bg-blue-600 transition-colors text-center shadow-sm"
                      >
                        {item.name}
                      </button>
                    </Link>
                  </div>
                ) : (
                  (
                    <div key={index}>
                      <Link href={item.path}>
                        <div 
                          onClick={closeMobileMenu}
                          className={`py-3 px-4 font-inter font-medium rounded-lg hover:bg-blue-50 transition-colors cursor-pointer ${
                            currentPath === item.path ? 'text-primary bg-blue-50' : 'text-secondary'
                          }`}
                        >
                          {item.name}
                        </div>
                      </Link>
                    </div>
                  )
                )
              ))}
            </div>
            
            <div className="mt-auto pt-6 border-t border-gray-200 mt-8">
              <div className="flex justify-center space-x-4">
                <button className="p-2 rounded-full text-secondary hover:text-primary hover:bg-blue-50 transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </button>
                <button className="p-2 rounded-full text-secondary hover:text-primary hover:bg-blue-50 transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </button>
                <button className="p-2 rounded-full text-secondary hover:text-primary hover:bg-blue-50 transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Overlay when mobile menu is open */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMobileMenu}
          ></div>
        )}
      </nav>
    </header>
  );
}
