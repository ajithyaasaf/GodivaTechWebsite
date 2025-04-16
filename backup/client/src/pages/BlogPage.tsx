import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search, Calendar, User, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  // Framer motion animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our <span className="text-blue-200">Blog</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8">
                Insights, trends, and expert opinions on technology, digital transformation, and industry innovations.
              </p>
              <div className="relative max-w-xl mx-auto">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="w-full px-6 py-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Search size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Post */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto relative overflow-hidden">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{blogPosts[0].date}</span>
                    <User size={16} className="mr-2" />
                    <span>{blogPosts[0].readTime} min read</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-4">{blogPosts[0].title}</h2>
                  <p className="text-secondary mb-6">{blogPosts[0].excerpt}</p>
                  <Link href={`/blog/article-1`}>
                    <button className="btn-primary inline-flex items-center">
                      Read Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {blogPosts.slice(1).map((post, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <User size={14} className="mr-1" />
                      <span>{post.readTime} min read</span>
                    </div>
                    <h3 className="font-bold text-xl text-dark mb-3">{post.title}</h3>
                    <p className="text-secondary mb-4">{post.excerpt}</p>
                    <Link href={`/blog/article-${index + 2}`}>
                      <div className="text-primary font-medium flex items-center cursor-pointer group">
                        Read More 
                        <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <button className="bg-white border border-gray-300 text-dark px-8 py-3 rounded-full hover:bg-gray-50 transition-colors flex items-center">
                Load More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </section>
        
        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h2 className="section-title">Explore Categories</h2>
              <p className="section-description">
                Browse our articles by topic to find the insights most relevant to your interests.
              </p>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {['Web Development', 'Mobile Apps', 'Cloud Computing', 'Cybersecurity', 'AI & ML', 'Digital Marketing'].map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-light rounded-xl p-6 text-center hover:bg-blue-50 transition-colors cursor-pointer border border-gray-100 hover:border-blue-200"
                >
                  <h3 className="font-medium text-dark">{category}</h3>
                  <p className="text-sm text-secondary mt-1">12 Articles</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}