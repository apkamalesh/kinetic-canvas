import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <PageWrapper variant="zoom">
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <GradientOrbs />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono tracking-wider text-primary mb-8"
          >
            <Sparkles size={14} />
            LET'S BUILD SOMETHING GREAT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-8xl font-bold leading-[0.95] tracking-tight max-w-5xl mx-auto"
          >
            Have a <span className="text-gradient-hero animate-gradient-shift bg-[length:200%_auto]">wild idea?</span>
            <br />
            Let's make it real.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            From MVPs to full product launches — I'll partner with you to ship pixel-perfect, performant experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.06, filter: "blur(0.4px)" }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-10 py-5 rounded-2xl bg-gradient-primary font-semibold text-lg text-primary-foreground overflow-hidden animate-pulse-glow"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-3">
                  <Mail size={20} />
                  Hire Me Now
                </span>
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="px-10 py-5 rounded-2xl glass font-semibold text-lg flex items-center gap-3 hover:text-primary transition-colors"
              >
                <MessageCircle size={20} />
                Start a Chat
              </motion.button>
            </Link>
          </motion.div>

          {/* Animated rings */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-[600px] w-[600px] rounded-full border border-primary/10" />
          </motion.div>
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <div className="h-[800px] w-[800px] rounded-full border border-secondary/10" />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default CTA;
