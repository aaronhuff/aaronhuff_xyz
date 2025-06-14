
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            With over 5 years of experience in network automation and cloud-native development, 
            I specialize in bridging the gap between traditional networking and modern cloud infrastructure.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise spans from automating complex network configurations with Python and Ansible 
            to deploying scalable applications on Kubernetes. I'm passionate about Infrastructure as Code 
            and believe in the power of automation to solve real-world problems.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Tech Stack</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Bash", "PowerShell"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Network Protocols</h4>
              <div className="flex flex-wrap gap-2">
                {["BGP", "OSPF", "EIGRP", "RIP"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Automation & IaC</h4>
              <div className="flex flex-wrap gap-2">
                {["Ansible", "Terraform", "Nautobot", "CI/CD", "GitHub Actions"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Cloud & Container Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {["Azure", "Oracle Cloud", "Kubernetes", "Docker"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Network Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {["Cisco IOS", "Cisco NXOS", "Versa SD-WAN", "Cisco DNA Center", "Versa Director"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Enterprise Tools & DevOps</h4>
              <div className="flex flex-wrap gap-2">
                {["Infoblox", "ServiceNow", "GitHub", "Git", "Azure DevOps"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-300 mb-2">Agile & Project Management</h4>
              <div className="flex flex-wrap gap-2">
                {["Scrum Master", "Sprint Planning", "Sprint Reviews", "Retrospectives"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
