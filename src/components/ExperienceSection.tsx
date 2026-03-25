import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const experiences = [
  {
    company: "Merative",
    location: "Ireland",
    role: "Data Engineer",
    period: "Jan 2022 – Present",
    highlights: [
      "Built and automated data ingestion processes using Python on Azure Databricks",
      "Leveraged ETL tools for monthly database updates in healthcare data industry",
      "Designed SQL queries via Azure Synapse serverless pools for Power BI analytics",
      "Utilized Azure Data Factory to orchestrate complex ETL workflows",
      "Applied Agile methodologies, reducing deployment time by 20%",
      "Implemented scalable storage solutions using Blob Storage & ADLS Gen 2",
    ],
    tech: ["Azure Databricks", "Azure Data Factory", "Azure Synapse", "Python", "SQL", "Power BI"],
    side: "left" as const,
  },
  {
    company: "The Sparks Foundation",
    location: "Ireland",
    role: "Data & Business Analyst Intern",
    period: "Jan 2021 – Jun 2021",
    highlights: [
      "Analysed historical data & corrected incorrect data classifications",
      "Contributed to 'Customer Insights Dashboard' using SQL, Excel & PowerBI",
      "Performed quality assurance on databases to ensure data accuracy",
    ],
    tech: ["SQL", "Excel", "Power BI", "Python"],
    side: "right" as const,
  },
  {
    company: "Techno Care Solutions",
    location: "India",
    role: "Business Analyst – Banking Client",
    period: "Jan 2017 – Nov 2018",
    highlights: [
      "Leveraged Power BI to create data pipelines for downstream analytics",
      "Created ETL scripts using Python for data feed retrieval",
      "Built SQL & JIRA framework for real-time financial tracking, saving 30K INR/week",
    ],
    tech: ["Power BI", "Python", "SQL", "JIRA"],
    side: "left" as const,
  },
];

const ExperienceCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const isLeft = exp.side === "left";

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] gap-0 md:gap-0">
      {/* Left content */}
      <div className={`${isLeft ? "block" : "hidden md:block"} ${isLeft ? "" : "md:invisible"}`}>
        {isLeft && (
          <ScrollReveal direction="left" delay={index * 0.15}>
            <CardContent exp={exp} />
          </ScrollReveal>
        )}
      </div>

      {/* Center timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <div className="relative z-10 w-5 h-5 rounded-full border-2 border-primary bg-background shadow-[0_0_20px_hsl(38_90%_55%/0.4)]" />
      </div>

      {/* Right content */}
      <div className={`${!isLeft ? "block" : "hidden md:block"} ${!isLeft ? "" : "md:invisible"}`}>
        {!isLeft && (
          <ScrollReveal direction="right" delay={index * 0.15}>
            <CardContent exp={exp} />
          </ScrollReveal>
        )}
      </div>

      {/* Mobile fallback: show on left always */}
      <div className="block md:hidden">
        <ScrollReveal delay={index * 0.15}>
          <CardContent exp={exp} />
        </ScrollReveal>
      </div>
    </div>
  );
};

const CardContent = ({ exp }: { exp: typeof experiences[0] }) => {
  return (
    <div
      className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 group"
    >
      <span className="text-muted-foreground font-body text-xs tracking-wider uppercase">{exp.period}</span>
      <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mt-2">{exp.company}</h3>
      <p className="text-primary font-body font-medium text-sm mb-1">{exp.role}</p>
      <p className="text-muted-foreground font-body text-xs mb-4">{exp.location}</p>

      <ul className="space-y-2 mb-5">
        {exp.highlights.map((h, j) => (
          <li
            key={j}
            className="text-muted-foreground font-body text-sm leading-relaxed flex items-start gap-2"
          >
            <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {exp.tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full text-xs font-body bg-primary/10 text-primary border border-primary/20">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="experience" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[150px] -translate-y-1/2" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <ScrollReveal>
            <p className="text-primary text-sm font-body tracking-widest uppercase mb-4">Career</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-6xl font-heading font-bold">
              Work <span className="text-gradient-accent">Experience</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="relative">
          {/* Center timeline line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-accent to-primary origin-top"
              style={{ height: timelineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
