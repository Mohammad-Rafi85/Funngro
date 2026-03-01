import React from 'react';
import {
    BarChart3, Video, Globe, Smartphone,
    Search, Database, PenTool, TrendingUp
} from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
    const services = [
        { name: 'Social Media Management', icon: <TrendingUp className="w-8 h-8" /> },
        { name: 'Video Creation', icon: <Video className="w-8 h-8" /> },
        { name: 'Website Design', icon: <Globe className="w-8 h-8" /> },
        { name: 'App Development', icon: <Smartphone className="w-8 h-8" /> },
        { name: 'Research & Surveys', icon: <Search className="w-8 h-8" /> },
        { name: 'Data Entry', icon: <Database className="w-8 h-8" /> },
        { name: 'Content Writing', icon: <PenTool className="w-8 h-8" /> },
        { name: 'Influencer Marketing', icon: <BarChart3 className="w-8 h-8" /> },
    ];

    return (
        <section className="bg-slate-50 py-24 px-6 overflow-hidden">
            <div className="section-padding flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        What Teens Can Do For <span className="gradient-text">Your Business</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Fresh perspectives and digital-first skills that give your brand a competitive edge.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="glass p-8 rounded-3xl group flex flex-col items-center text-center transition-all hover:translate-y-[-10px] hover:shadow-2xl hover:bg-white"
                        >
                            <div className="w-16 h-16 bg-blue-100/50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:bg-blue-600 group-hover:text-white">
                                {service.icon}
                            </div>
                            <h4 className="text-lg font-bold text-slate-900">{service.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
