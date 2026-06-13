import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// The data array now supports both numbers and strings
const skills = [
  { name: "C", value: 85 },
  { name: "Java", value: 80 },
  { name: "MySQL", value: 83 },
  { name: "DBMS", value: 81 },
  { name: "React.js", value: 75 },
  { name: "Spring Boot", value: 80 },
];

const Counter = ({ to }: { to: number | string }) => {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    // If 'to' is a string, we don't animate numbers
    if (!inView || typeof to === "string") return;

    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setV(Math.round(latest)),
    });
    return controls.stop;
  }, [inView, to]);

  // Logic: Show the string if it's text, otherwise show the animated number
  return <span ref={ref}>{typeof to === "string" ? to : v}</span>;
};

const SkillBar = ({ name, value, i }: { name: string; value: number | string; i: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  // Calculate width: if it's "Ongoing", we show a full but subtle bar
  const barWidth = typeof value === "number" ? `${value}%` : "100%";

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
          <Counter to={value} />
          {typeof value === "number" && "%"}
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: barWidth } : { width: 0 }}
          transition={{ duration: 1.4, delay: i * 0.07, ease: [0.4, 0, 0.2, 1] }}
          className={`h-full rounded-full ${
            typeof value === "string" ? "bg-primary/20" : "bg-gradient-primary"
          }`}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <PageWrapper variant="slide">
      <section className="relative min-h-screen pb-20">
        <GradientOrbs />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl pt-20"
          >
            <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— TECH STACK</p>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
              Sharp tools.{" "}
              <span className="text-gradient-primary">Sharper craft.</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg">
              From low-level logic in C to enterprise-grade systems in Spring Boot and React. 
              I craft data-driven solutions with MySQL and a focus on clean, scalable code.
            </p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {skills.map((s, i) => (
              <SkillBar key={s.name} name={s.name} value={s.value} i={i} />
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Skills;