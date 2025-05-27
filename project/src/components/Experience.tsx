import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "Full Stack Developer",
      company: "Tata Consultancy Services",
      period: "2024 - Present",
      description: [
        "Developed core features for the taxation returns module, building responsive UIs with Angular 17 and implementing resilient back-end microservices using Java & Spring Boot, directly enhancing the tax filing and processing experience for users.",
        "Engineered robust RESTful APIs (CRUD) with Spring Boot, managing complex tax data across PostgreSQL and MongoDB while ensuring data integrity through meticulous transaction management and exception handling.",
        "Improved system efficiency and scalability by integrating Apache Kafka for asynchronous processing of high-volume tax return events and leveraging Redis for caching, significantly boosting application responsiveness.",
        "Strengthened application security and compliance by implementing JWT for secure API access, enforcing rigorous server-side validation, and building comprehensive audit trails for all data modifications.",
        "Ensured code reliability and supported modern DevOps practices by writing thorough JUnit tests for critical business logic and containerizing applications with Docker, contributing to a stable and maintainable codebase."
      ]
    },
 
  ];

  return (
    <section id="experience" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            My professional journey and the companies I've worked with.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              className="mb-12 relative pl-8 border-l border-white/20"
            >
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-white transform -translate-x-1/2"></div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-white/50 text-sm mt-1 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-white/80 font-medium mb-4">{exp.company}</p>
                <ul className="space-y-4">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-white/70 flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/50 mt-2 mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-opacity-90 transition-all"
          >
            Download Full Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;