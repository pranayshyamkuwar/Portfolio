import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section className="relative py-32 px-6" id="about">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm font-body tracking-widest uppercase mb-4">About Me</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-12">
            Who <span className="text-gradient-primary">I Am</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ScrollReveal delay={0.2} direction="left">
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              A dedicated and passionate Data Engineer based in Dublin, Ireland with 4+ years of industry experience in Data Engineering, BI, Healthcare & Insurance Analytics, and Business Analytics.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} direction="right">
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              I hold an MSc in Data Analytics from the National College of Ireland. I specialize in building scalable ETL pipelines, cloud data platforms on Azure, and delivering actionable insights for healthcare and enterprise clients.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4+", label: "Years Experience" },
              { value: "20%", label: "Faster Deployments" },
              { value: "93.1%", label: "ML Model Accuracy" },
              { value: "MSc", label: "Data Analytics" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-border">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground font-body text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
