import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  variant?: "fade" | "slide" | "scale" | "zoom";
}

const variants = {
  fade: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  },
  slide: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.92, filter: "blur(10px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 1.05, filter: "blur(10px)" },
  },
  zoom: {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },
};

const PageWrapper = ({ children, variant = "scale" }: PageWrapperProps) => {
  return (
    <motion.div
      initial={variants[variant].initial}
      animate={variants[variant].animate}
      exit={variants[variant].exit}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="min-h-screen pt-24 pb-12"
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
