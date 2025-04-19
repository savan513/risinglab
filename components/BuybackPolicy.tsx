"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Diamond, Coins, TrendingUp } from "lucide-react"

export function BuybackPolicy() {
    const buybackFeatures = [
        {
            icon: <Diamond className="w-12 h-12 text-gold" />,
            title: "80% Of Diamond Value",
            description: "Get guaranteed 80% value back on all diamond jewelry"
        },
        {
            icon: <Coins className="w-12 h-12 text-gold" />,
            title: "100% Of Gold Value",
            description: "Receive full market value for gold content in your jewelry"
        },
        {
            icon: <TrendingUp className="w-12 h-12 text-gold" />,
            title: "Prevailing Market Rate",
            description: "Fair buyback prices based on current market conditions"
        }
    ]

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-gold/5 z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-block relative mx-auto">
                        <div className="flex items-center justify-center space-x-2 mb-3">
                            <div className="h-px w-8 bg-gold/40"></div>
                            <span className="text-sm uppercase tracking-widest text-gold font-light">Trustworthy</span>
                            <div className="h-px w-8 bg-gold/40"></div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4 tracking-widest">Buyback Policy</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto text-sm tracking-widest">
                            Our transparent buyback policy ensures you receive fair value for your jewelry
                        </p>
                        <div className="mt-5 w-40 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto"></div>
                    </div>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative bg-background/80 backdrop-blur-sm border border-gold/10 rounded-2xl shadow-[0_10px_40px_-15px_rgba(212,175,55,0.1)] overflow-hidden">
                        {/* Decorative card background elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full opacity-40 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full opacity-40 blur-3xl translate-y-1/2 -translate-x-1/3"></div>

                        {/* Card content */}
                        <div className="relative z-10 grid md:grid-cols-3 gap-8 p-8">
                            {buybackFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="group"
                                >
                                    <div className="relative h-full p-6 bg-gold/5 dark:bg-background/40 backdrop-blur-sm border border-gold/10 rounded-xl hover:border-gold/30 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
                                        {/* Card hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                        {/* Card edge highlights on hover */}
                                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-150"></div>

                                        <div className="relative z-10 mb-6">
                                            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-background to-gold/5 shadow-md border border-gold/10 group-hover:border-gold/30 transition-all duration-500 mx-auto">
                                                {/* Animated wave borders */}
                                                <div className="absolute w-[calc(100%+16px)] h-[calc(100%+16px)] border border-gold/20 rounded-full animate-wave-1"></div>
                                                <div className="absolute w-[calc(100%+24px)] h-[calc(100%+24px)] border border-gold/15 rounded-full animate-wave-2"></div>
                                                <div className="absolute w-[calc(100%+32px)] h-[calc(100%+32px)] border border-gold/10 rounded-full animate-wave-3"></div>
                                                
                                                {feature.icon}
                                            </div>
                                        </div>

                                        <h3 className="relative z-10 text-xl font-serif text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                                            {feature.title}
                                        </h3>

                                        <div className="relative z-10 w-12 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-4 group-hover:w-20 transition-all duration-500"></div>

                                        <p className="relative z-10 text-muted-foreground max-w-[250px] mx-auto">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative corners */}
                        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/30"></div>
                        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/30"></div>
                        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/30"></div>
                        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/30"></div>
                    </div>
                </div>
            </div>

            {/* Add the keyframe animations for waves */}
            <style jsx global>{`
                @keyframes wave1 {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 0.3; }
                    100% { transform: scale(0.8); opacity: 0.5; }
                }
                @keyframes wave2 {
                    0% { transform: scale(0.9); opacity: 0.4; }
                    50% { transform: scale(1.1); opacity: 0.2; }
                    100% { transform: scale(0.9); opacity: 0.4; }
                }
                @keyframes wave3 {
                    0% { transform: scale(1); opacity: 0.3; }
                    50% { transform: scale(1.15); opacity: 0.1; }
                    100% { transform: scale(1); opacity: 0.3; }
                }
                .animate-wave-1 {
                    animation: wave1 3s infinite ease-in-out;
                }
                .animate-wave-2 {
                    animation: wave2 4s infinite ease-in-out;
                    animation-delay: 0.5s;
                }
                .animate-wave-3 {
                    animation: wave3 5s infinite ease-in-out;
                    animation-delay: 1s;
                }
            `}</style>
        </section >
    )
} 