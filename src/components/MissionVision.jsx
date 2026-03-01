import React from 'react';
import { Target, Eye, Rocket, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const MissionVision = () => {
    return (
        <section className="bg-white py-24 px-6 overflow-hidden">
            <div className="section-padding grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex gap-6 items-start">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-3xl flex-shrink-0 flex items-center justify-center p-4">
                            <Target className="w-10 h-10" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Our Mission</h2>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                To enable teenagers to discover their passion early, earn responsibly, and build skills that prepare them for the future workforce.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex gap-6 items-start">
                        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-3xl flex-shrink-0 flex items-center justify-center p-4">
                            <Eye className="w-10 h-10" />
                        </div>
                        <div>
                            <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Our Vision</h2>
                            <p className="text-xl text-slate-600 leading-relaxed max-w-lg transition-colors group-hover:text-slate-900">
                                To become the world’s largest platform where companies collaborate with young talent to create innovation, opportunity, and economic empowerment.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MissionVision;
