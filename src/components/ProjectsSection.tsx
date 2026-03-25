import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Olympics Data Pipeline",
    subtitle: "Azure Data Factory & Databricks",
    description:
      "End-to-end data pipeline for 11,000+ athletes across 47 disciplines from the Tokyo Olympics. Loaded via ADF HTTP connector, transformed on Databricks, and served through Azure Synapse for analytics.",
    tech: ["Azure Data Factory", "ADLS Gen 2", "Databricks", "Synapse", "SQL"],
    accent: "primary" as const,
  },
  {
    title: "Steel Surface Defect Classification",
    subtitle: "Deep CNN + NMF Research",
    description:
      "Built a D-CNN architecture for classifying steel surface defects using non-negative matrix factorization. Achieved 93.1% accuracy on the NEU dataset with Gaussian blur noise reduction.",
    tech: ["Python", "Machine Learning", "CNN", "LaTeX"],
    accent: "accent" as const,
  },
  {
    title: "Telecom Data Warehouse",
    subtitle: "BI & Analytics Project",
    description:
      "Designed a data warehouse analyzing top telecom brands worldwide. Investigated NPS impact on brand value, market cap, and revenue using SSIS, SSAS, and Tableau visualizations.",
    tech: ["SSMS", "SSIS", "SSAS", "R", "SQL", "Tableau"],
    accent: "primary" as const,
  },
];

const accentStyles = {
  primary: {
    border: "hover:border-primary/40",
    glow: "group-hover:bg-primary/5",
    badge: "bg-primary/10 text-primary border-primary/20",
    dot: "bg-primary",
  },
  accent: {
    border: "hover:border-accent/40",
    glow: "group-hover:bg-accent/5",
    badge: "bg-accent/10 text-accent border-accent/20",
    dot: "bg-accent",
  },
};

const ProjectsSection = () => {
  return (
    <section className="relative py-32 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-20">
            Featured <span className="text-gradient-primary">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const styles = accentStyles[project.accent];
            return (
              <ScrollReveal key={project.title} delay={i * 0.15}>
                <div
                  className={`group relative p-8 rounded-2xl bg-card border border-border ${styles.border} transition-all duration-500 h-full flex flex-col`}
                >
                  {/* Glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl transition-colors duration-500 ${styles.glow}`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-2 h-2 rounded-full ${styles.dot} mb-6`} />
                    <h3 className="text-xl font-heading font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-muted-foreground font-body text-sm mb-4">{project.subtitle}</p>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className={`px-3 py-1 rounded-full text-xs font-body border ${styles.badge}`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
