import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <section className="relative pt-40 pb-20 overflow-hidden bg-slate-50">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3B82F633,transparent_40%)]"></div>

            <div className="section-padding flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-8">
                        Our Purpose
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tighter">
                        Empowering the <span className="gradient-text">Next Generation</span> of Professionals
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Funngro is built by educators, parents, and technology experts who believe teenagers should <span className="text-slate-900 font-bold">learn by doing real work.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
