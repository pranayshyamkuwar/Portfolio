import ScrollReveal from "./ScrollReveal";
import { Mail, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="relative py-32 px-6" id="contact">
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <p className="text-primary text-sm font-body tracking-widest uppercase mb-4">Contact</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-16">
            Open to opportunities in data engineering, analytics, and technology consulting. Based in Dublin, Ireland.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="mailto:Pranayshyamkuwar11@gmail.com"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-foreground font-body text-sm">Pranayshyamkuwar11@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/pranayshyamkuwar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors group"
            >
              <Linkedin className="w-5 h-5 text-accent" />
              <span className="text-foreground font-body text-sm">LinkedIn Profile</span>
            </a>
            <div className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-card border border-border">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-foreground font-body text-sm">Dublin, Ireland</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="mt-32 text-center">
        <p className="text-muted-foreground font-body text-xs">
          © 2024 Pranay Shyamkuwar. Crafted with precision.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
