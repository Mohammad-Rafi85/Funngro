import React from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-20 pb-10 text-white">
            <div className="section-padding grid md:grid-cols-4 gap-12 border-b border-white/10 mb-10">
                <div>
                    <Link to="/" className="flex items-center gap-2 mb-6 group">
                        <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-600 transition-colors">
                            F
                        </div>
                        <span className="text-2xl font-bold tracking-tight">Funngro.</span>
                    </Link>
                    <p className="text-slate-400 mb-8 max-w-xs leading-relaxed">
                        Empowering India’s youth through real project work. Bridging the gap between smart companies and smarter talent.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors">
                            <Instagram className="w-5 h-5 text-slate-300" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors">
                            <Twitter className="w-5 h-5 text-slate-300" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors">
                            <Linkedin className="w-5 h-5 text-slate-300" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 pt-2">Solutions</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Hire Teenlancers</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Post a Project</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Corporate Programs</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Case Studies</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 pt-2">Company</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Mission</Link></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Press Kit</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-bold mb-6 pt-2">Contact Us</h4>
                    <ul className="space-y-4 text-slate-400">
                        <li className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-blue-400" />
                            <span>support@funngro.com</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-blue-400" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-blue-400" />
                            <span>Bengaluru, KA, India</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-padding py-0 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>© 2026 Funngro. All rights reserved.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
