
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from "@/components/ui/badge";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } }
        }}
        className="text-center mb-16"
      >
        <motion.h2 variants={variants} className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </motion.h2>
        <motion.div variants={variants} className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></motion.div>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } }
          }}
          className="space-y-6"
        >
          <motion.p variants={variants} className="text-lg text-gray-300 leading-relaxed">
            With over 5 years of experience in network automation and cloud-native development, 
            I specialize in bridging the gap between traditional networking and modern cloud infrastructure.
          </motion.p>
          <motion.p variants={variants} className="text-lg text-gray-300 leading-relaxed">
            My expertise spans from automating complex network configurations with Python and Ansible 
            to deploying scalable applications on Kubernetes. I'm passionate about Infrastructure as Code 
            and believe in the power of automation to solve real-world problems.
          </motion.p>
          <motion.div variants={variants} className="grid grid-cols-2 gap-4 mt-8">
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">20+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="space-y-6"
        >
          <motion.h3 variants={variants} className="text-2xl font-semibold text-white mb-4">Tech Stack</motion.h3>
          <div className="space-y-4">
            <motion.div variants={variants}>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Bash", "PowerShell"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <motion.div variants={variants}>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Network Protocols</h4>
              <div className="flex flex-wrap gap-2">
                {["BGP", "OSPF", "EIGRP", "RIP"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <motion.div variants={variants}>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Automation & IaC</h4>
              <div className="flex flex-wrap gap-2">
                {["Ansible", "Terraform", "Nautobot", "CI/CD", "GitHub Actions"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <motion.div variants={variants}>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Cloud & Container Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {["Azure", "Oracle Cloud", "Kubernetes", "Docker"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <motion.div variants={variants}>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Network Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {["Cisco IOS", "Cisco NXOS", "Versa SD-WAN", "Cisco DNA Center", "Versa Director"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <motion.div variants={variants}>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Enterprise Tools & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {["Infoblox", "ServiceNow", "GitHub", "Git", "Azure DevOps"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <motion.div variants={variants}>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Agile & Project Management</h4>
              <div className="flex flex-wrap gap-2">
                {["Scrum Master", "Sprint Planning", "Sprint Reviews", "Retrospectives"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <motion.div variants={variants}>
              <h4 className="text-lg font-medium text-gray-300 mb-2">AI Development</h4>
              <div className="flex flex-wrap gap-2">
                {["Agentic AI Development", "Large Language Models", "Prompt Engineering"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
