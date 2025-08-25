
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Network Infrastructure Automation",
      description: "Automated network device configuration and monitoring using Python, Ansible, and NAPALM",
      tech: ["Python", "Ansible", "NAPALM", "Cisco IOS"],
      github: "#",
      demo: "#"
    },
    {
      title: "Decidely.me",
      description: "Technology decision-making platform that guides users through personalized comparisons to find the perfect solution",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "#",
      demo: "https://decidely.me/"
    },
    {
      title: "Infrastructure as Code Pipeline",
      description: "Terraform and Python-based IaC pipeline for multi-cloud deployments",
      tech: ["Terraform", "Python", "AWS", "Azure"],
      github: "#",
      demo: "#"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } }
        }}
        className="text-center mb-16"
      >
        <motion.h2 variants={cardVariants} className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </motion.h2>
        <motion.div variants={cardVariants} className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></motion.div>
        <motion.p variants={cardVariants} className="text-xl text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my expertise in network automation and cloud-native development.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)" }}
          >
            <Card className="bg-white/5 border-gray-700 group h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.github !== "#" && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="inline-block"
                    >
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </motion.a>
                  )}
                  {project.demo !== "#" && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="inline-block"
                    >
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Site
                      </Button>
                    </motion.a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
