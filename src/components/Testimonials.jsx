import React from 'react';
import { Star, Quote, QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        { name: 'Arjun Verma', company: 'Verma Solutions', text: 'Working with Funngro was a game-changer! The level of creativity and digital savvy the teens brought saved us 30% on our marketing spend.', rating: 5 },
        { name: 'Suhani Shah', company: 'Craft-Up India', text: 'I was skeptical about hiring teenagers for our app development, but they exceeded all expectations. Fast delivery, professional communication.', rating: 5 },
        { name: 'Nikhil Ray', company: 'Global Tech', text: 'The research project they completed for our market expansion was thorough and impressive. A fresh perspective that we really needed!', rating: 5 },
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
                        Loved by Companies <span className="text-blue-600">Across India</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
                    {testimonials.map((testi, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 flex flex-col relative group"
                        >
                            <Quote className="w-12 h-12 text-blue-100 absolute top-6 right-6 group-hover:text-blue-200 transition-colors" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(testi.rating)].map((_, j) => (
                                    <Star key={j} className="w-5 h-5 fill-orange-400 text-orange-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 italic text-lg mb-8 leading-relaxed">
                                "{testi.text}"
                            </p>
                            <div className="mt-auto border-t pt-6">
                                <h4 className="text-lg font-black text-slate-900">{testi.name}</h4>
                                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">{testi.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
