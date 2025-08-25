import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Contact from Portfolio");
    const body = encodeURIComponent("Hi Aaron,\n\nI'd like to get in touch regarding:\n\n");
    window.open(`mailto:aaron.t.huff@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.3 } }
          }}
          className="text-center mb-12"
        >
          <motion.h2 variants={variants} className="text-4xl font-bold text-white mb-4">Let's Connect</motion.h2>
          <motion.p variants={variants} className="text-xl text-gray-400">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a 
                    href="mailto:aaron.t.huff@gmail.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    aaron.t.huff@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Location</p>
                  <p className="text-gray-400">Chatham, Ontario, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start a Project?</h3>
            <p className="text-gray-400 mb-8">
              Whether you need network automation, cloud infrastructure, or DevOps solutions, 
              I'm here to help transform your ideas into reality.
            </p>
            <motion.div whileHover={{ scale: 1.05, y: -5, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)" }}>
              <Button
                onClick={handleEmailClick}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 w-full"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send me an Email
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;