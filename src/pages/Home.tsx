import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import PageWrapper from "@/components/PageWrapper";
import ParticlesBackground from "@/components/ParticlesBackground";
import SocialLinks from "@/components/SocialLinks";
import { Sparkles, Code2, Trophy, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero3DScene = lazy(() => import("@/components/Hero3DScene"));

const stats = [
  { Icon: Code2, label: "Projects Shipped", value: "50+" },
  { Icon: Trophy, label: "Hackathons Won", value: "08" },
  { Icon: Sparkles, label: "Tech Stacks", value: "15+" },
  { Icon: Rocket, label: "Years Coding", value: "05" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  }),
};

const Home = () => {
  return (
    <PageWrapper variant="scale">
      <section className="relative">
        <ParticlesBackground />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* LEFT: Intro */}
            <div>
              <motion.div
                initial="hidden"
                animate="show"
                custom={0}
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono tracking-wider text-primary mb-6"
              >
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                AVAILABLE FOR FREELANCE
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="show"
                custom={1}
                variants={fadeUp}
                className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight"
              >
                Hey, I'm <span className="text-gradient-hero animate-gradient-shift bg-[length:200%_auto]">Nova</span>
                <br />
                Creative <span className="italic font-light">Developer</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="show"
                custom={2}
                variants={fadeUp}
                className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                I craft immersive digital experiences at the intersection of design,
                code, and motion — blending 3D, interactive particles, and cinematic
                animation into products people love to use.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="show"
                custom={3}
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link to="/cta">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative px-7 py-3.5 rounded-xl bg-gradient-primary font-semibold text-primary-foreground overflow-hidden animate-pulse-glow"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Hire Me
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </span>
                  </motion.button>
                </Link>
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-7 py-3.5 rounded-xl glass font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    View Work
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="show"
                custom={4}
                variants={fadeUp}
                className="mt-10"
              >
                <SocialLinks />
              </motion.div>
            </div>

            {/* RIGHT: 3D Scene */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[420px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden"
            >
              <Suspense fallback={<div className="h-full w-full glass animate-pulse rounded-3xl" />}>
                <Hero3DScene />
              </Suspense>
              <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About + Stats */}
      <section className="container mx-auto px-6 mt-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— ABOUT ME</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Building <span className="text-gradient-primary">cinematic</span> experiences for the modern web.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            With 5+ years engineering production-grade interfaces, I specialize in
            React, TypeScript, WebGL, and motion design. From SaaS dashboards to
            generative art — I obsess over the details others overlook.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass p-6 rounded-2xl group hover:border-primary/40 transition-colors"
            >
              <Icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
              <div className="font-display text-3xl font-bold text-gradient-primary">{value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono tracking-wide uppercase">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
