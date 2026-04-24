import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React / Next.js", value: 95 },
  { name: "TypeScript", value: 92 },
  { name: "Three.js / WebGL", value: 85 },
  { name: "Framer Motion", value: 90 },
  { name: "Node.js / tRPC", value: 88 },
  { name: "Tailwind / CSS", value: 96 },
  { name: "Figma / UI Design", value: 80 },
  { name: "Postgres / Supabase", value: 84 },
];

const Counter = ({ to }: { to: number }) => {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setV(Math.round(latest)),
    });
    return controls.stop;
  }, [inView, to]);
  return <span ref={ref}>{v}</span>;
};

const SkillBar = ({ name, value, i }: { name: string; value: number; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: i * 0.07, duration: 0.5 }}
      className="glass rounded-2xl p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-sm text-primary">
          <Counter to={value} />%
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.4, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full bg-gradient-primary"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <PageWrapper variant="slide">
      <section className="relative">
        <GradientOrbs />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— TECH STACK</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Sharp tools.{" "}
              <span className="text-gradient-primary">Sharper craft.</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Years of focused practice across the full stack — UI, motion, and infra.
            </p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-2 gap-4">
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} i={i} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;
