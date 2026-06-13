import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";

const Contact = () => {
  return (
    <PageWrapper variant="scale">
      <section className="relative min-h-[85vh] flex items-center justify-center">
        <GradientOrbs />
        
        <div className="container mx-auto px-6 relative z-10 py-20">
          <div className="max-w-3xl mx-auto text-center">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— GET IN TOUCH</p>
              <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                Let’s start a <span className="text-gradient-primary">conversation</span>.
              </h1>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
                I am currently looking for new opportunities and internships. 
                My inbox is always open for collaborations or just a friendly hello!
              </p>
            </motion.div>

            {/* Information Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Email Item */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass rounded-3xl p-8 group hover:border-primary/50 transition-colors"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Email Me At</div>
                <a href="mailto:kamalesh0910kk@gmail.com" className="text-foreground font-medium hover:text-primary transition-colors block break-all">
                  kamalesh0910kk@gmail.com
                </a>
              </motion.div>

              {/* Location Item */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-3xl p-8 group hover:border-secondary/50 transition-colors"
              >
                <div className="h-14 w-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Location</div>
                <div className="text-foreground font-medium">Tiruppur,Tamil Nadu,India</div>
              </motion.div>

              {/* Availability Item */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-3xl p-8 group hover:border-green-400/50 transition-colors"
              >
                <div className="h-14 w-14 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <GraduationCap size={24} />
                </div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Availability</div>
                <div className="text-foreground font-medium">Open to Full-time & Internships</div>
              </motion.div>
            </div>

            {/* Social Media Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-8 border-t border-white/5 inline-block"
            >
              <p className="text-xs font-mono text-muted-foreground mb-6 tracking-widest uppercase">Connect on Socials</p>
              <SocialLinks />
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;