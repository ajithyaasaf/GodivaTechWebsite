import { motion } from "framer-motion";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { testimonials } from "@/lib/data";
import { Star, Quote } from "lucide-react";

export default function TestimonialsPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };
  
  const container = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Client <span className="text-blue-200">Testimonials</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8">
                See what our clients have to say about their experience working with Godiva Tech and the results we've delivered.
              </p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="flex items-center justify-center">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white mt-3 text-lg font-medium">500+ Happy Clients</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Testimonials Grid */}
        <section className="py-20 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative"
                >
                  <Quote className="absolute top-6 right-6 h-10 w-10 text-blue-100" />
                  
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark">{testimonial.name}</h3>
                      <p className="text-secondary text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`inline-block h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-secondary mb-4">{testimonial.content}</p>
                  
                  <p className="text-sm text-gray-400">{testimonial.company} Project</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Video Testimonial */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="section-title">Video Testimonials</h2>
              <p className="section-description">
                Watch testimonials from our clients sharing their success stories after working with us.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/90 hover:bg-white rounded-full w-20 h-20 flex items-center justify-center transition-colors">
                    <svg viewBox="0 0 24 24" className="w-10 h-10 text-primary fill-current">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-2xl font-bold">E-commerce Transformation Success</h3>
                  <p className="text-white/90">StyleTrend Boutique shares their journey of digital transformation</p>
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
              className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Become Our Next Success Story?</h2>
              <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
                Join hundreds of satisfied clients who have transformed their digital presence with our expert solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-full font-medium transition-colors">
                    Get in Touch
                  </button>
                </Link>
                <Link href="/portfolio">
                  <button className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-medium transition-colors hover:bg-white/10">
                    View Our Work
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}