"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientButton } from "@/components/ui/gradient-button";
import { MagnetLines } from "@/components/ui/magnet-lines";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-primary/10",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(79,172,254,0.2)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(79,172,254,0.3),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Royal Branding",
    title1 = "NinthWay",
    title2 = "Branders",
    description = "We don't just build brands — we craft royal legacies. Transform your vision into a memorable, futuristic brand that commands attention and drives success.",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    description?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-secondary/[0.05] blur-3xl" />
            
            {/* Background magnet lines */}
            <div className="absolute inset-0 opacity-10">
                <MagnetLines 
                    rows={12}
                    columns={12}
                    containerSize="100vw"
                    lineColor="hsl(var(--primary))"
                    lineWidth="2px"
                    lineHeight="40px"
                    baseAngle={0}
                    className="w-full h-full"
                />
            </div>

            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-primary/15"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-secondary/15"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-accent/15"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-primary/20"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-secondary/20"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-primary/80" />
                        <span className="text-sm text-foreground/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
                                {title1}
                            </span>
                            <br />
                            <span className="text-gradient-royal font-black">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-foreground/60 mb-8 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <GradientButton 
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Let's Build Your Brand
                        </GradientButton>
                        <GradientButton 
                            variant="variant"
                            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Our Work
                        </GradientButton>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric }