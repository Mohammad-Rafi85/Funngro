import React from 'react';
import { Lightbulb, DollarSign, Clock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
    const features = [
        { title: 'Innovation', icon: <Lightbulb className="w-8 h-8" />, color: 'blue' },
        { title: 'Cost Efficiency', icon: <DollarSign className="w-8 h-8" />, color: 'green' },
        { title: 'Fast Delivery', icon: <Clock className="w-8 h-8" />, color: 'orange' },
        { title: 'Social Impact', icon: <Heart className="w-8 h-8" />, color: 'red' },
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
                        Smart Talent Meets <span className="text-blue-600">Smart Companies</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Funngro helps businesses access a new generation of creative, digital-native talent.
                        Companies get cost-effective solutions while teenagers gain real-world work experience, financial independence, and career exposure.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center group"
                        >
                            <div className={`w-20 h-20 bg-${feature.color}-50 text-${feature.color}-600 rounded-3xl flex items-center justify-center mb-6 transition-all group-hover:bg-${feature.color}-600 group-hover:text-white group-hover:rotate-12`}>
                                {feature.icon}
                            </div>
                            <h4 className="text-lg font-bold text-slate-900">{feature.title}</h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
