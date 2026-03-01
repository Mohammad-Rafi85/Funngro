import React from 'react';
import { CheckCircle2, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyFunngro = () => {
    const points = [
        { title: 'Access untapped creative talent', desc: 'Fresh perspectives and digital-first skills that give your brand a competitive edge.' },
        { title: 'Reduce hiring costs', desc: 'Get professional results at a fraction of the cost compared to traditional agencies.' },
        { title: 'Fresh perspectives from digital natives', desc: 'Let the generation that built the internet show you how to dominate it.' }
    ];

    return (
        <section className="bg-slate-50 py-24 px-6 overflow-hidden">
            <div className="section-padding flex flex-col md:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-10 tracking-tight">
                        Why Companies <span className="text-blue-600">Choose Funngro</span>
                    </h2>

                    <div className="space-y-8">
                        {points.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-4 p-6 glass rounded-2xl group hover:shadow-2xl transition-all"
                            >
                                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex-shrink-0 flex items-center justify-center font-bold text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{point.title}</h4>
                                    <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:w-1/2"
                >
                    <img
                        src="/impact-img.png"
                        alt="Teens collaborating with companies"
                        className="rounded-[3rem] shadow-2xl w-full h-auto animate-float"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default WhyFunngro;
