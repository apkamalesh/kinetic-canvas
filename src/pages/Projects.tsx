import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "AI-Farming Guide",
    desc: "An intelligent agriculture platform featuring AI-driven crop diagnostics, real-time market insights, and a multilingual voice assistant for modern farmers.",
    tags: ["React", "Spring Boot", "AI/ML", "Multilingual"],
    color: "from-emerald-500/40 to-green-600/40",
    github: "https://github.com/Kamaleshap",
    live: "https://ai-farm-guide-frontend-l999.vercel.app/"
  },
  {
    title: "Learning Outcomes Monitoring (LOMS)",
    desc: "Developed a web-based system using Java, MySQL, and React to monitor and evaluate student learning outcomes, featuring a dashboard for visualization and reporting to support academic decisions.",
    tags: ["Java", "MySQL", "React", "Spring Boot"],
    color: "from-purple-500/40 to-fuchsia-600/40",
    github: "https://github.com/Kamaleshap",
    live: "https://loms-frontend-eg5e.vercel.app/" 
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <PageWrapper variant="fade">
      <section className="relative min-h-screen py-20">
        <GradientOrbs />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— SELECTED WORK</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Projects I'm <span className="text-gradient-primary">proud of</span>.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Showcasing my expertise in Full Stack Development and Java Backend.
            </p>
          </motion.div>

          {/* Added items-start to keep cards aligned at the top if heights vary */}
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                className="group relative glass rounded-2xl p-6 overflow-hidden border border-white/5 flex flex-col h-full"
              >
                <motion.div
                  animate={{ opacity: hovered === i ? 0.6 : 0.2 }}
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${p.color} blur-2xl -z-10`}
                />

                <div className="aspect-video rounded-xl bg-slate-900 mb-5 relative overflow-hidden border border-white/10 shrink-0">
                  <motion.div
                    animate={hovered === i ? { scale: 1.1, rotate: 3 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-40`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-white/10">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                
                {/* FIX: Removed fixed h-20 and overflow-hidden to allow full text display */}
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-grow">
                  {p.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2 shrink-0">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/5 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 text-sm pt-5 border-t border-white/5 shrink-0">
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 text-primary hover:underline"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a 
                    href={p.github}
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-1.5 text-muted-foreground hover:text-white"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Projects;