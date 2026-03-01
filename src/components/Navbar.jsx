import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform">
                        F
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-slate-900">
                        Funngro<span className="text-blue-600">.</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-slate-600'}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `font-medium transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-slate-600'}`
                        }
                    >
                        Our Mission
                    </NavLink>
                    <button className="px-6 py-2 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2 text-sm">
                        Hire Teen Talent <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white border-b shadow-xl p-6 md:hidden flex flex-col gap-4"
                    >
                        <NavLink to="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-2">Home</NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-2 border-t">Our Mission</NavLink>
                        <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold mt-2 shadow-lg shadow-blue-200">
                            Hire Teen Talent
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
