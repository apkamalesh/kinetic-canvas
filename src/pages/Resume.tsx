import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

const Resume = () => {
  return (
    <PageWrapper variant="slide">
      <section className="relative">
        <GradientOrbs />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— RESUME / CV</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Grab the <span className="text-gradient-primary">full story</span>.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Experience, education, awards, and tech stack — all in one tidy PDF.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -8, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative glass rounded-3xl p-10 group overflow-hidden"
            >
              {/* shimmer */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              <div className="flex items-start gap-5">
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 glow-primary"
                >
                  <FileText size={28} className="text-primary-foreground" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold">Nova_Resume_2026.pdf</h3>
                  <p className="text-sm text-muted-foreground mt-1">Updated April 2026 · 312 KB</p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <motion.a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold animate-pulse-glow"
                    >
                      <Download size={18} />
                      Download PDF
                    </motion.a>
                    <motion.a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass font-semibold hover:text-primary transition-colors"
                    >
                      <Eye size={18} />
                      Preview
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {[
                  { v: "5+", l: "Years Exp" },
                  { v: "15+", l: "Tech Stack" },
                  { v: "50+", l: "Projects" },
                ].map((s, i) => (
                  <motion.div
                    key={s.l}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="p-3 rounded-xl bg-muted/30"
                  >
                    <div className="font-display text-xl font-bold text-gradient-primary">{s.v}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Resume;
