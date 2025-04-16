import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { portfolioItems } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function PortfolioPage() {
  // Framer motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100 
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-8" />
          <div className="relative container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-blue-200">Portfolio</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8">
                Explore our diverse range of successful projects and see how we've helped businesses transform their digital presence.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center mt-8"
            >
              <Link href="/contact">
                <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Start Your Project
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Portfolio Grid */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <p className="text-blue-100">{item.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-xl text-dark">{item.title}</h3>
                      <span className="bg-blue-50 text-primary px-3 py-1 rounded-full text-sm font-medium">{item.category}</span>
                    </div>
                    <p className="text-secondary mb-4">{item.description}</p>
                    <button className="text-primary font-medium flex items-center group/btn">
                      View Project <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <Link href="/contact">
                <button className="btn-primary inline-flex items-center">
                  Request a Custom Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Client Testimonial Showcase */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="section-title">Client Success Stories</h2>
              <p className="section-description">
                Hear from our clients about their experience working with us and the results they've achieved.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/30 flex-shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80" 
                    alt="Client" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <svg className="w-12 h-12 text-white/30 mb-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white text-lg md:text-xl mb-6 italic leading-relaxed">
                    "Godiva Tech transformed our e-commerce platform completely. The attention to detail, innovative solutions, and seamless execution resulted in a 200% increase in our online sales within just three months. They're not just service providers; they're strategic partners in our growth."
                  </p>
                  <div>
                    <h4 className="text-white font-bold text-lg">Sarah Johnson</h4>
                    <p className="text-blue-100">CEO, StyleTrend Boutique</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-dark rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Next Digital Success?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                Let's create something amazing together. Our team is ready to help bring your vision to life with cutting-edge technology and creative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                    Start a Project
                  </button>
                </Link>
                <Link href="/services">
                  <button className="bg-transparent border border-gray-500 hover:border-white text-white px-8 py-3 rounded-full font-medium transition-colors">
                    Explore Services
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}