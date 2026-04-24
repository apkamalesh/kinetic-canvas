import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import { Github, Code, Trophy, Terminal, Brain } from "lucide-react";

const profiles = [
  { name: "GitHub", handle: "@nova-dev", stat: "184 repos · 3.2k stars", Icon: Github, color: "from-slate-500 to-slate-700" },
  { name: "LeetCode", handle: "@nova", stat: "1240+ solved · Knight", Icon: Code, color: "from-amber-500 to-orange-600" },
  { name: "SkillRack", handle: "@novacode", stat: "Rank 142 · 2400 pts", Icon: Trophy, color: "from-emerald-500 to-teal-600" },
  { name: "HackerRank", handle: "@nova", stat: "5⭐ Algorithms", Icon: Terminal, color: "from-green-500 to-emerald-700" },
  { name: "Codeforces", handle: "@nova", stat: "Expert · 1680", Icon: Brain, color: "from-blue-500 to-indigo-600" },
  { name: "CodeChef", handle: "@nova", stat: "4★ · 1850", Icon: Trophy, color: "from-yellow-500 to-amber-700" },
];

const Coding = () => {
  return (
    <PageWrapper variant="zoom">
      <section className="relative">
        <GradientOrbs />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— COMPETITIVE CODING</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              My coding <span className="text-gradient-primary">profiles</span>.
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Where I sharpen my algorithms and ship open source.
            </p>
          </motion.div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {profiles.map((p, i) => (
              <motion.a
                key={p.name}
                href="#"
                onClick={(e) => e.preventDefault()}
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  type: "spring",
                  stiffness: 180,
                  damping: 16,
                }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative glass rounded-2xl p-6 overflow-hidden block"
              >
                <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-30 blur-2xl group-hover:opacity-60 transition-opacity`} />
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    className={`h-14 w-14 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <p.Icon size={24} />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                    <p className="text-xs font-mono text-muted-foreground">{p.handle}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm text-foreground/80">{p.stat}</p>
                <div className="mt-4 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  visit →
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
