import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import PageWrapper from "@/components/PageWrapper";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Sparkles, Code2, Rocket, ArrowRight } from "lucide-react"; 
import { Link } from "react-router-dom";

// 1. Define the 3D Scene lazy import
const Hero3DScene = lazy(() => import("@/components/Hero3DScene"));

// 2. Define your tech stack stats
const stats = [
  { Icon: Code2, label: "Frontend", value: "React" },
  { Icon: Sparkles, label: "Backend", value: "Spring Boot" },
  { Icon: Rocket, label: "Database", value: "MySQL" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
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
                AVAILABLE FOR OPPORTUNITIES
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="show"
                custom={1}
                variants={fadeUp}
                className="font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight"
              >
                Hey, I'm <span className="text-gradient-hero animate-gradient-shift bg-[length:200%_auto]">Kamalesh</span>
                <br />
                Java & React <span className="italic font-light">Developer</span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="show"
                custom={2}
                variants={fadeUp}
                className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                I am a Java & React Developer with a solid foundation in Java, Spring Boot, 
                React, and MySQL. I enjoy building web applications and continuously improving 
                my skills in both frontend and backend development. My focus is on creating 
                responsive user interfaces, developing RESTful APIs, and designing efficient 
                database solutions.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="show"
                custom={3}
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link to="/contact">
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
      <section className="container mx-auto px-6 mt-24 relative z-10 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— MY CORE STACK</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Building <span className="text-gradient-primary">scalable</span> solutions for the modern web.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            I focus on bridging the gap between intuitive user interfaces and
            robust, scalable backends. As a fresh developer, I am committed to 
            writing clean, maintainable code and solving complex problems with 
            modern technologies.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map(({ Icon, label, value }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass p-8 rounded-2xl group hover:border-primary/40 transition-colors"
            >
              <Icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={32} />
              <div className="font-display text-2xl font-bold text-gradient-primary">{value}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono tracking-wide uppercase">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;