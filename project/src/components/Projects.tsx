import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "EcomEdge",
      description: "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration.",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Harvest.AI",
      description: "An application designed to detect nutrient deficiencies in plants using deep learning. By analyzing images and leveraging the EfficientNet-B5 architecture.",
      image: "https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["Deep Learning", "TensorFlow", "Android Studio"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Pruning the Pilots",
      description: "Pruning the Pilots is a deep learning-based system for optimizing pilot signal design in wireless communication.",
      image: "https://images.pexels.com/photos/207153/pexels-photo-207153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["DeepLearning", "MATLAB API"],
      github: "https://github.com",
      live: "https://example.com"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 ease-in-out hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-all duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-20 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/50 backdrop-blur-md p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <Github size={18} className="text-white" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/50 backdrop-blur-md p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-500 ease-in-out">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-6 line-clamp-3 group-hover:text-white/80 transition-all duration-500 ease-in-out">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-white/5 backdrop-blur-sm rounded-full border border-white/10 text-white/80 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/10 text-white font-medium rounded-full hover:border-white/20 hover:from-white/15 hover:to-white/10 transition-all duration-300 group"
          >
            <Github size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;