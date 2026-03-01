import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Trophy, Users, Briefcase, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const stats = [
        { label: 'Teenlancers', value: '50L+', icon: <Users className="w-5 h-5" /> },
        { label: 'Companies', value: '4000+', icon: <Briefcase className="w-5 h-5" /> },
        { label: 'Live Projects', value: '1000+', icon: <Trophy className="w-5 h-5" /> },
    ];

    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-purple-100 rounded-full blur-3xl opacity-50 animate-pulse delay-1000"></div>

            <div className="section-padding flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        India's #1 Teen Talent Platform
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                        Hire Smart Teen Talent for <span className="gradient-text">Real Business Impact</span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                        India’s fastest-growing teen freelancing platform connecting companies with innovative young minds.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
                        <button className="btn-primary group w-full sm:w-auto">
                            Hire Teen Talent <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-secondary group w-full sm:w-auto">
                            <PlayCircle className="w-5 h-5" /> Explore Projects
                        </button>
                    </div>

                    <div className="flex gap-10">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex flex-col"
                            >
                                <div className="flex items-center gap-2 text-blue-600 mb-1">
                                    {stat.icon}
                                    <span className="text-2xl font-black text-slate-900">{stat.value}</span>
                                </div>
                                <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 relative"
                >
                    <div className="relative z-10 p-4 glass rounded-3xl rotate-1 group hover:rotate-0 transition-transform duration-500">
                        <img
                            src="/hero-img.png"
                            alt="Teenagers collaborating with companies"
                            className="rounded-2xl shadow-2xl w-full h-auto"
                        />

                        {/* Floating cards */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-blue-50"
                        >
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase">New Project</p>
                                <p className="text-sm font-bold text-slate-900">App Development</p>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-purple-50"
                        >
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                                <Users className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase">Recent Hire</p>
                                <p className="text-sm font-bold text-slate-900">Social Media Expert</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
