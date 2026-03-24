import ScrollReveal from "./ScrollReveal";

const EducationSection = () => {
  return (
    <section className="relative py-32 px-6" id="education">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm font-body tracking-widest uppercase mb-4">Education</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16">
            Academic <span className="text-gradient-accent">Background</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-foreground">MSc in Data Analytics</h3>
                <p className="text-primary font-body">National College of Ireland, Dublin</p>
              </div>
              <span className="text-muted-foreground font-body text-sm mt-1 md:mt-2">2019 – 2020</span>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Data Warehousing & BI · Data Storage & Management · Statistics for Data Analytics · Advanced Data Mining · Analytical CRM · Data Visualization · Research in Computing
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Programming for Data Science with Python", org: "Nano Degree", year: "2020" },
              { title: "Marketing Analytics", org: "Nano Degree", year: "2020" },
              { title: "IBM Agile Explorer", org: "IBM", year: "2022" },
            ].map((cert) => (
              <div key={cert.title} className="p-6 rounded-xl bg-secondary border border-border">
                <p className="text-foreground font-body text-sm font-medium mb-1">{cert.title}</p>
                <p className="text-muted-foreground font-body text-xs">{cert.org} · {cert.year}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EducationSection;
