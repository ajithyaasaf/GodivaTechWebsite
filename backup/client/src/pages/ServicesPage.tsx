import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { ChevronRight, Check } from "lucide-react";
import { Link } from "wouter";

export default function ServicesPage() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="font-inter text-secondary bg-light">
      <Header />
      <main>
        {/* Page Banner */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-8" />
          <div className="container mx-auto px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <h1 className="font-inter font-bold text-4xl md:text-5xl mb-4">Our Services</h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
                Comprehensive technology solutions tailored for your business needs
              </p>
              <div className="flex items-center text-sm md:text-base">
                <Link href="/">
                  <div className="text-white hover:text-blue-200 transition-colors cursor-pointer">Home</div>
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span>Services</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
        
        {/* Services Content */}
        <ServicesSection />
        
        {/* Additional Service Info */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="font-inter font-bold text-3xl text-dark mb-6">How We Deliver Excellence</h2>
                <p className="text-secondary mb-6">
                  Our approach to service delivery is centered around collaboration, quality, and innovation. We work closely with clients to understand their unique challenges and objectives before crafting tailored solutions.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    {
                      title: "Discovery & Planning",
                      description: "Thorough analysis of requirements and development of detailed roadmaps for project execution."
                    },
                    {
                      title: "Design & Development",
                      description: "Iterative development process with regular client feedback and agile methodology."
                    },
                    {
                      title: "Testing & Quality Assurance",
                      description: "Rigorous testing protocols to ensure reliable, secure, and high-performance solutions."
                    },
                    {
                      title: "Deployment & Support",
                      description: "Smooth deployment with comprehensive post-launch support and maintenance."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="bg-primary w-6 h-6 rounded-full flex items-center justify-center shadow-md">
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-dark">{item.title}</h3>
                        <p className="text-secondary">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-primary text-white font-inter font-medium rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
                  >
                    Request a Consultation
                  </motion.button>
                </Link>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="order-first lg:order-last"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Our team collaborating" 
                  className="rounded-xl shadow-xl w-full h-auto transform transition-transform duration-500 hover:scale-[1.02]"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="font-inter font-bold text-3xl mb-4">Ready to Transform Your Business?</h2>
                <p className="text-blue-100 max-w-2xl">
                  Let's discuss how our services can help you achieve your business goals and stay ahead of the competition.
                </p>
              </div>
              <div>
                <Link href="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-primary font-inter font-medium rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Contact Us Today
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
        
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}