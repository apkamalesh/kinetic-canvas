import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import {
  Download,
  FileText,
  Eye,
  GraduationCap,
  Code2,
  Database,
} from "lucide-react";

const Resume = () => {
  const resumeFile = "/KAMALESH_AP_CV.pdf";

  return (
    <PageWrapper variant="slide">
      <section className="relative min-h-screen py-20">
        <GradientOrbs />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">
              — RESUME / CV
            </p>

            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Grab the <span className="text-gradient-primary">full story</span>.
            </h1>

            <p className="mt-4 text-muted-foreground text-lg">
              Download my official resume to see my academic records
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-16 max-w-2xl mx-auto"
          >
            <motion.div
              whileHover={{ y: -8 }}
              className="relative glass rounded-[2.5rem] p-10 group overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="h-20 w-20 rounded-3xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <FileText
                    size={36}
                    className="text-primary-foreground"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-3xl font-bold">
                    KAMALESH_RESUME
                  </h3>

                  <p className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-widest">
                    Bachelor of Engineering
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                    {/* Download */}
                    <a
                      href={resumeFile}
                      download
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-primary text-primary-foreground font-bold transition-transform active:scale-95"
                    >
                      <Download size={20} />
                      Download Resume
                    </a>

                    {/* Preview */}
                    <a
                      href={resumeFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass font-bold hover:text-primary transition-colors active:scale-95"
                    >
                      <Eye size={20} />
                      Preview
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center">
                  <GraduationCap className="text-primary mb-2" size={20} />
                  <div className="font-display text-xl font-bold text-gradient-primary">
                    7.15
                  </div>
                  <div className="text-[10px] uppercase text-muted-foreground">
                    CGPA
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center">
                  <Code2 className="text-primary mb-2" size={20} />
                  <div className="font-display text-xl font-bold text-gradient-primary">
                    Spring Boot
                  </div>
                  <div className="text-[10px] uppercase text-muted-foreground">
                    Backend
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center">
                  <Database className="text-primary mb-2" size={20} />
                  <div className="font-display text-xl font-bold text-gradient-primary">
                    MySQL
                  </div>
                  <div className="text-[10px] uppercase text-muted-foreground">
                    Database
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Resume;