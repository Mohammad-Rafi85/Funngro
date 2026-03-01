import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const CTABanner = () => {
    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="section-padding bg-slate-900 rounded-[3rem] p-16 flex flex-col items-center text-center relative overflow-hidden"
            >
                {/* Background glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-600/30 to-purple-600/30 opacity-50 -z-10"></div>
                <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-blue-500 rounded-full blur-[100px] opacity-40"></div>

                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                    Start Working With <span className="text-blue-400">Teen Talent</span> Today
                </h2>

                <p className="text-xl text-slate-400 mb-12 max-w-2xl leading-relaxed">
                    Access the digital-native generation and grow your business with innovative, cost-effective solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                    <button className="btn-primary px-10 py-5 bg-white text-slate-900 hover:bg-slate-100 hover:text-slate-900 shadow-xl shadow-blue-500/20 group w-full sm:w-auto">
                        Post a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="btn-secondary px-10 py-5 border-white/20 text-white hover:bg-white hover:text-slate-900 shadow-xl w-full sm:w-auto">
                        <PhoneCall className="w-5 h-5" /> Book Demo
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default CTABanner;
