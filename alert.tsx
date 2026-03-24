import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    title: "Data Engineering",
    skills: ["Python", "SQL", "Apache Spark", "ETL/ELT", "Data Pipelines", "Big Data"],
  },
  {
    title: "Cloud & Infrastructure",
    skills: ["Azure Databricks", "Azure Data Factory", "Azure Synapse", "ADLS Gen 2", "AWS", "Snowflake"],
  },
  {
    title: "Analytics & BI",
    skills: ["Power BI", "Tableau", "Excel", "Data Visualization", "Healthcare Analytics"],
  },
  {
    title: "Tools & Methods",
    skills: ["Airflow", "JIRA", "Agile", "Git", "Jupyter Notebooks", "Salesforce", "Monday.com"],
  },
];

const SkillsSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineWidth = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary text-sm font-body tracking-widest uppercase mb-4">Expertise</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
        </ScrollReveal>
        <motion.div
          className="h-px bg-primary mb-20 origin-left"
          style={{ width: lineWidth }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.title} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors group">
                <h3 className="text-xl font-heading font-semibold mb-6 text-foreground group-hover:text-gradient-primary transition-colors">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-body bg-secondary text-secondary-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
