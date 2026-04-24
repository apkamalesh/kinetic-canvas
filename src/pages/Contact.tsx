import PageWrapper from "@/components/PageWrapper";
import GradientOrbs from "@/components/GradientOrbs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { Mail, MapPin, Send, Check, Loader2 } from "lucide-react";
import SocialLinks from "@/components/SocialLinks";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
    toast({ title: "Message sent ✨", description: "I'll reply within 24 hours." });
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }, 2400);
  };

  return (
    <PageWrapper variant="scale">
      <section className="relative">
        <GradientOrbs />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <p className="font-mono text-xs text-primary tracking-[0.2em] mb-3">— GET IN TOUCH</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Let's create something <span className="text-gradient-primary">unforgettable</span>.
              </h1>
              <p className="mt-4 text-muted-foreground">
                Have a project in mind, want to collaborate, or just want to say hi? Drop a message — I read every one.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-10 w-10 rounded-xl glass flex items-center justify-center text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider">Email</div>
                    <div className="text-foreground font-medium">hello@nova.dev</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="h-10 w-10 rounded-xl glass flex items-center justify-center text-secondary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider">Location</div>
                    <div className="text-foreground font-medium">Remote · Worldwide</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <SocialLinks />
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={submit}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 glass rounded-3xl p-6 md:p-10 space-y-5"
              noValidate
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Your name" error={errors.name}>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={80}
                    className="w-full bg-input/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground border border-transparent focus:border-primary focus:outline-none transition"
                    placeholder="Ada Lovelace"
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="w-full bg-input/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground border border-transparent focus:border-primary focus:outline-none transition"
                    placeholder="you@company.com"
                  />
                </Field>
              </div>
              <Field label="Message" error={errors.message}>
                <textarea
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  className="w-full bg-input/50 rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground border border-transparent focus:border-primary focus:outline-none transition resize-none"
                  placeholder="Tell me about your project…"
                />
              </Field>

              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className="relative w-full px-6 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold overflow-hidden disabled:opacity-90"
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Send size={18} /> Send message
                    </motion.span>
                  )}
                  {status === "sending" && (
                    <motion.span
                      key="sending"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Loader2 size={18} className="animate-spin" /> Sending…
                    </motion.span>
                  )}
                  {status === "sent" && (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center gap-2"
                    >
                      <Check size={18} /> Message sent!
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2 block">{label}</span>
    {children}
    {error && (
      <motion.span
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="block mt-1.5 text-xs text-destructive"
      >
        {error}
      </motion.span>
    )}
  </label>
);

export default Contact;
