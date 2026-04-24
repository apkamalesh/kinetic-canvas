import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Nebula Dashboard",
    desc: "A real-time analytics dashboard with WebGL data viz and live streaming charts.",
    tags: ["React", "Three.js", "WebSockets"],
    color: "from-cyan-500/40 to-blue-600/40",
  },
  {
    title: "Pulse Music App",
    desc: "AI-powered music recommendations with mood-based playlists and waveform UI.",
    tags: ["Next.js", "TensorFlow", "Web Audio"],
    color: "from-pink-500/40 to-purple-600/40",
  },
  {
    title: "Orbit CRM",
    desc: "An enterprise CRM with smart pipelines, workflow automation, and SSO.",
    tags: ["TypeScript", "Postgres", "tRPC"],
    color: "from-purple-500/40 to-fuchsia-600/40",
  },
  {
    title: "Drift Generative Art",
    desc: "An open-source generative art studio. Used by 12k+ artists worldwide.",
    tags: ["WebGL", "GLSL", "Canvas"],
    color: "from-emerald-500/40 to-cyan-600/40",
  },
  {
    title: "Aurora Mobile",
    desc: "Cross-platform meditation app with biometric sync and adaptive soundscapes.",
    tags: ["React Native", "Expo", "HealthKit"],
    color: "from-orange-500/40 to-pink-600/40",
  },
  {
    title: "Vault Wallet",
    desc: "Multi-chain Web3 wallet featuring hardware integration and gasless txs.",
    tags: ["Solidity", "Wagmi", "Viem"],
    color: "from-amber-500/40 to-red-600/40",
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <PageWrapper variant="fade">
      <section className="relative">
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
              A selection of recent client and personal work — hover to peek inside.
            </p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -10, rotateX: 4, rotateY: -4 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="group relative glass rounded-2xl p-6 overflow-hidden cursor-pointer"
                loading="lazy"
              >
                {/* Animated colored aura */}
                <motion.div
                  animate={{ opacity: hovered === i ? 0.6 : 0.2 }}
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${p.color} blur-2xl -z-10`}
                />

                <div className="aspect-video rounded-xl bg-gradient-to-br from-muted to-background mb-5 relative overflow-hidden">
                  <motion.div
                    animate={hovered === i ? { scale: 1.1, rotate: 6 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`absolute inset-0 bg-gradient-to-br ${p.color}`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-5xl font-bold text-foreground/20">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-1 rounded-md bg-muted/50 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3 text-sm">
                  <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-1.5 text-primary hover:text-primary-glow">
                    <ExternalLink size={14} /> Live
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground">
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
