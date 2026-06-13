import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/apkamalesh", label: "GitHub", color: "hover:text-primary" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/kamalesh-a-p0910/", label: "LinkedIn", color: "hover:text-primary" },
  { Icon: Twitter, href: "https://x.com/kamalesh0910kk", label: "Twitter", color: "hover:text-primary" },
  { Icon: Instagram, href: "https://www.instagram.com/_._kamalesh._/", label: "Instagram", color: "hover:text-secondary" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {socials.map(({ Icon, href, label, color }, i) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.18, rotate: -8, y: -4 }}
          whileTap={{ scale: 0.92 }}
          className={`relative h-12 w-12 rounded-xl glass flex items-center justify-center text-muted-foreground transition-colors ${color}`}
        >
          <Icon size={20} />
          <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity glow-primary pointer-events-none" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
