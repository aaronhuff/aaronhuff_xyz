
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
      title: "Cloud-Native Monitoring Stack",
      description: "Kubernetes-based monitoring solution with Prometheus, Grafana, and custom Python operators",
      tech: ["Kubernetes", "Python", "Prometheus", "Grafana"],
      github: "#",
      demo: "#"
    },
    {
      title: "Infrastructure as Code Pipeline",
      description: "Terraform and Python-based IaC pipeline for multi-cloud deployments",
      tech: ["Terraform", "Python", "AWS", "Azure"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my expertise in network automation and cloud-native development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-white/5 border-gray-700 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-gray-600 text-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white hover:text-black">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
