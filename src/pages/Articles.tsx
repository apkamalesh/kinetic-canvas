import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Award, Star } from "lucide-react";

const achievements = [
  {
    title: "International Conference Paper Presentation",
    subtitle: "BLYNK IOT: An Platform for crop Supervision",
    date: "MAR 2025",
    tag: "Publication",
    desc: "Presented at the ICMRI 2nd International Conference-2025 organized by RSP conference hub, Coimbatore.",
  },
  {
    title: "HCL Hackathon Shortlist",
    subtitle: "Full-stack Java Application",
    date: "2024",
    tag: "Hackathon",
    desc: "Shortlisted for building a full-stack application with Java backend, REST APIs, JWT authentication, and MySQL.",
  },
  {
    title: "SQL Gold Badge & Certification",
    subtitle: "HackerRank Basics of SQL",
    date: "2024",
    tag: "Certification",
    desc: "Successfully cleared the HackerRank assessment for SQL fundamentals and database management.",
  },
  {
    title: "IoT & Digital Transformation Certification",
    subtitle: "Foundational Tech Certification",
    date: "2023",
    tag: "Certification",
    desc: "Certified in the basics of Internet of Things and its role in modern digital systems.",
  },
];

const Achievements = () => {
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
            <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— RECOGNITION</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Major <span className="text-gradient-primary">Achievements</span>.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              A collection of my certifications, hackathons, and academic publications.
            </p>
          </motion.div>

          <div className="mt-14 space-y-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ x: 10 }}
                className="group relative block glass rounded-[2rem] p-6 md:p-8 border border-white/5 hover:border-primary/40 transition-all cursor-default"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4 font-mono">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {a.tag}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {a.date}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                      {a.title}
                    </h3>
                    <p className="text-primary/80 font-medium mt-1">{a.subtitle}</p>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl">
                      {a.desc}
                    </p>
                  </div>

                  {/* Visual Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="h-16 w-16 rounded-2xl glass flex items-center justify-center text-primary shrink-0 self-end md:self-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all"
                  >
                    {a.tag === "Publication" ? <Star size={28} /> : <Award size={28} />}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Achievements;