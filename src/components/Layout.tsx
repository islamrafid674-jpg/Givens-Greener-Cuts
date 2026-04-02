import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, Clock, Leaf, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-gray">
      {/* Premium Floating Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-4" : "py-6",
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-500 flex justify-between items-center",
            isScrolled
              ? "max-w-5xl glass rounded-full px-6 py-3"
              : "max-w-7xl px-6 sm:px-8",
          )}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group z-50 relative"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white flex items-center justify-center shrink-0 transition-all duration-300">
              <img 
                src="https://i.imgur.com/CgB3Lxo.png" 
                alt="Givens Greener Cuts Logo" 
                className="w-full h-full object-contain p-1"
              />
            </div>
            <div
              className={cn(
                "transition-colors duration-300",
                isScrolled || isMobileMenuOpen
                  ? "text-brand-dark"
                  : "text-brand-dark lg:text-white",
              )}
            >
              <span className="block font-heading font-extrabold text-xl leading-none">
                Givens Greener Cuts
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-300",
                    isActive
                      ? "text-brand-green"
                      : isScrolled
                        ? "text-gray-600 hover:text-brand-dark"
                        : "text-gray-200 hover:text-white",
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-green/10 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
            <div className="pl-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-green px-6 py-2.5 font-medium text-white transition-all hover:scale-105 hover:shadow-xl"
              >
                <span className="absolute inset-0 bg-brand-gold transition-transform duration-300 ease-out translate-y-full group-hover:translate-y-0"></span>
                <span className="relative flex items-center gap-2">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 z-50 relative rounded-full backdrop-blur-md transition-colors",
              isMobileMenuOpen
                ? "text-brand-dark"
                : isScrolled
                  ? "text-brand-dark bg-gray-100"
                  : "text-white bg-white/10",
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Full Screen Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-brand-gray flex flex-col justify-center px-8"
          >
            <div className="space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "block text-5xl font-heading font-bold tracking-tight",
                      location.pathname === link.path
                        ? "text-brand-green"
                        : "text-brand-dark hover:text-brand-green transition-colors",
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg w-full"
                >
                  Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Premium Footer */}
      <footer className="bg-brand-dark text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg border border-white/10 bg-white flex items-center justify-center shrink-0">
                  <img 
                    src="https://i.imgur.com/CgB3Lxo.png" 
                    alt="Givens Greener Cuts Logo" 
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <span className="font-heading font-extrabold text-2xl md:text-3xl tracking-tight">
                  Givens Greener Cuts
                </span>
              </div>
              <p className="text-gray-400 mb-8 max-w-sm text-balance leading-relaxed">
                Premium residential and commercial property maintenance in
                Omaha, NE. Elevating outdoor spaces with uncompromising quality
                and reliability.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all group"
                >
                  <span className="font-bold text-lg group-hover:scale-110 transition-transform">
                    f
                  </span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-green hover:border-brand-green transition-all group"
                >
                  <span className="font-bold text-lg group-hover:scale-110 transition-transform">
                    in
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-brand-gold">
                Services
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Lawn Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Landscaping Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Yard Cleanup
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Debris Removal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Snow Management
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-brand-gold">
                Company
              </h3>
              <ul className="space-y-4 text-gray-400">
                <li>
                  <Link
                    to="/projects"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-6 text-brand-gold">
                Contact
              </h3>
              <ul className="space-y-5 text-gray-400">
                <li className="flex items-start space-x-3 group">
                  <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-1 group-hover:text-brand-gold transition-colors" />
                  <span className="leading-relaxed">
                    1234 Greenery Lane
                    <br />
                    Omaha, NE 68102
                  </span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <Phone className="w-5 h-5 text-brand-green shrink-0 group-hover:text-brand-gold transition-colors" />
                  <span>(402) 555-0198</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <Clock className="w-5 h-5 text-brand-green shrink-0 group-hover:text-brand-gold transition-colors" />
                  <span>Mon-Fri: 7am - 6pm</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Givens Greener Cuts. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
