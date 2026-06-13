import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import { Code, Terminal } from "lucide-react";

// Focus only on LeetCode and HackerRank as requested
const profiles = [
  { 
    name: "LeetCode", 
    handle: "Kamaleshap", 
    stat: "Problem Solving · Data Structures", 
    link: "https://leetcode.com/u/apkamalesh/", 
    Icon: Code, 
    color: "from-amber-500 to-orange-600" 
  },
  { 
    name: "HackerRank", 
    handle: "kamalesh0910kk", 
    stat: "Certified: Basics of SQL", 
    link: "https://www.hackerrank.com/profile/KAMALESH_A_P", 
    Icon: Terminal, 
    color: "from-green-500 to-emerald-700" 
  },
];

const Coding = () => {
  return (
    <PageWrapper variant="zoom">
      <section className="relative min-h-screen py-20">
        <GradientOrbs />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— COMPETITIVE CODING</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              My coding <span className="text-gradient-primary">profiles</span>.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Where I sharpen my problem-solving skills and master database queries.
            </p>
          </motion.div>

          <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-4xl">
            {profiles.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 180,
                  damping: 16,
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative glass rounded-3xl p-8 overflow-hidden block border border-white/5"
              >
                {/* Background Glow */}
                <div className={`absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
                
                <div className="flex items-center gap-5 relative z-10">
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-xl shadow-black/20`}
                  >
                    <p.Icon size={30} />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                    <p className="text-sm font-mono text-muted-foreground">@{p.handle}</p>
                  </div>
                </div>

                <p className="mt-6 text-base text-foreground/80 relative z-10 leading-relaxed">
                  {p.stat}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-xs font-mono text-primary font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  <span>Visit Profile</span>
                  <span className="text-lg">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Coding;