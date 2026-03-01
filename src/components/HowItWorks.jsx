import React from 'react';
import { UserPlus, FileText, Filter, CheckCircle2, DollarSign, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        { title: 'Register your company', icon: <UserPlus className="w-8 h-8" /> },
        { title: 'Post your project in minutes', icon: <FileText className="w-8 h-8" /> },
        { title: 'Receive curated teen profiles', icon: <Filter className="w-8 h-8" /> },
        { title: 'Select and collaborate', icon: <CheckCircle2 className="w-8 h-8" /> },
        { title: 'Pay after delivery', icon: <DollarSign className="w-8 h-8" /> },
    ];

    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <div className="section-padding flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        How It Works
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Simple, transparent, and built for results.
                    </p>
                </motion.div>

                <div className="relative flex flex-col md:flex-row gap-8 w-full max-w-6xl md:justify-center">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative md:w-1/5 flex flex-col items-center group"
                        >
                            <div className="relative z-10 w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white transition-all group-hover:bg-blue-600 group-hover:text-white">
                                {step.icon}
                                <span className="absolute -top-2 -left-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                    {i + 1}
                                </span>
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 leading-snug">{step.title}</h4>

                            {/* Connecting Arrow for desktop */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-12 left-[100%] w-full -z-10 text-slate-200">
                                    <motion.div
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <ArrowRight className="w-12 h-12" />
                                    </motion.div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
