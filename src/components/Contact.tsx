
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities, innovative projects, or just talking tech.
        </p>
      </div>

      <Card className="bg-white/5 border-gray-700">
        <CardContent className="p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input 
                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Project Discussion"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea 
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
