import React from 'react';
import { Users, Briefcase, IndianRupee, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const ImpactSection = () => {
    const stats = [
        { label: 'Millions of teens empowered', value: '5L+', icon: <Users className="w-8 h-8" />, color: 'blue' },
        { label: 'Thousands of companies served', value: '4000+', icon: <Briefcase className="w-8 h-8" />, color: 'purple' },
        { label: 'Real income earned by students', value: '₹10Cr+', icon: <IndianRupee className="w-8 h-8" />, color: 'orange' },
        { label: 'Skills built for future careers', value: '100+', icon: <Rocket className="w-8 h-8" />, color: 'green' },
    ];

    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <div className="section-padding flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
                        Creating Impact <span className="text-blue-600">Beyond Business</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Our mission is to create a generation of confident, financially independent, and skilled individuals.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center group"
                        >
                            <div className={`w-20 h-20 bg-${stat.color}-50 text-${stat.color}-600 rounded-3xl flex items-center justify-center mb-6 transition-all group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-12`}>
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-black text-slate-900 mb-2">{stat.value}</h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest text-center">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;
