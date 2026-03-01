import React from 'react';
import { ArrowRight, UserPlus, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutFinalCTA = () => {
    return (
        <section className="bg-slate-50 py-32 px-6 overflow-hidden">
            <div className="section-padding flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                        Get Involved Now
                    </div>

                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
                        Join the Movement to <span className="gradient-text">Empower Young Talent</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-16">
                        Access the digital-native generation and grow your business with innovative, cost-effective solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                        <button className="btn-primary px-10 py-5 group shadow-2xl flex-1 sm:flex-none">
                            Hire Teens <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-secondary px-10 py-5 group shadow-2xl flex-1 sm:flex-none">
                            Become a Teenlancer <UserPlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutFinalCTA;
