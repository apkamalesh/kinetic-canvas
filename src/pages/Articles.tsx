import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const articles = [
  {
    title: "Building cinematic web experiences with Three.js & Framer Motion",
    date: "Apr 12, 2026",
    read: "8 min",
    tag: "WebGL",
  },
  {
    title: "Scaling React apps to 1M users — patterns that actually work",
    date: "Mar 28, 2026",
    read: "12 min",
    tag: "Architecture",
  },
  {
    title: "Why I rewrote my portfolio in pure motion design",
    date: "Mar 02, 2026",
    read: "6 min",
    tag: "Design",
  },
  {
    title: "The art of micro-interactions in modern UI",
    date: "Feb 14, 2026",
    read: "9 min",
    tag: "UX",
  },
];

const Articles = () => {
  return (
    <PageWrapper variant="fade">
      <section className="relative">
        <GradientOrbs />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— WRITING</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Featured <span className="text-gradient-primary">articles</span>.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Long-form essays on design, code, and craft.
            </p>
          </motion.div>

          <div className="mt-14 space-y-4">
            {articles.map((a, i) => (
              <motion.a
                key={a.title}
                href="#"
                onClick={(e) => e.preventDefault()}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 8 }}
                className="group block glass rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 font-mono">
                      <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary">{a.tag}</span>
                      <span className="flex items-center gap-1"><Calendar size={12} />{a.date}</span>
                      <span className="flex items-center gap-1"><Clock size={12} />{a.read}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-gradient-primary transition-all">
                      {a.title}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className="h-12 w-12 rounded-xl glass flex items-center justify-center text-primary shrink-0"
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Articles;
