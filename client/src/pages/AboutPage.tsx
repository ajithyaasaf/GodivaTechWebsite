import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { ChevronRight, Linkedin, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="font-roboto text-secondary bg-light">
      <Header />
      <main>
        {/* Page Banner */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="font-inter font-bold text-4xl md:text-5xl mb-4">About Us</h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
                Discover our story, mission, and the team behind Godiva Tech
              </p>
              <div className="flex items-center text-sm md:text-base">
                <Link href="/">
                  <div className="text-white hover:text-blue-200 transition-colors cursor-pointer">Home</div>
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span>About Us</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Content */}
        <AboutSection />
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-inter font-bold text-3xl text-dark mb-4">Meet Our Leadership Team</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Our diverse team of experts brings together decades of experience in technology, business, and innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Rajesh Kumar" 
                    className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                    <h3 className="font-inter font-semibold text-xl text-white">Rajesh Kumar</h3>
                    <p className="text-blue-200">CEO & Founder</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary mb-4">
                    With over 15 years of experience in technology and business management, Rajesh brings visionary leadership to Godiva Tech.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                    <a href="#" className="p-2 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Priya Sharma" 
                    className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                    <h3 className="font-inter font-semibold text-xl text-white">Priya Sharma</h3>
                    <p className="text-blue-200">CTO</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary mb-4">
                    Priya leads our technical strategy with expertise in emerging technologies, AI, cloud architecture, and cybersecurity.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                    <a href="#" className="p-2 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/62.jpg" 
                    alt="Anand Venkatesh" 
                    className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                    <h3 className="font-inter font-semibold text-xl text-white">Anand Venkatesh</h3>
                    <p className="text-blue-200">COO</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary mb-4">
                    Anand oversees our operations, ensuring efficient project execution and maintaining the highest quality standards.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                    <a href="#" className="p-2 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Team Member 4 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Lakshmi Rao" 
                    className="w-full h-64 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                    <h3 className="font-inter font-semibold text-xl text-white">Lakshmi Rao</h3>
                    <p className="text-blue-200">Director of Innovation</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-secondary mb-4">
                    Lakshmi drives our R&D initiatives, keeping Godiva Tech at the forefront of technological innovation and market trends.
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                    </a>
                    <a href="#" className="p-2 rounded-full bg-blue-50 text-primary hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 py-3 bg-primary text-white font-inter font-medium rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  Join Our Team
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-inter font-bold text-3xl text-dark mb-4">Our Core Values</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                These fundamental principles guide our work, shape our culture, and define who we are as a company
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-3">Innovation</h3>
                <p className="text-secondary">
                  We embrace a culture of continuous innovation, exploring new technologies and creative solutions to solve complex problems.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-3">Collaboration</h3>
                <p className="text-secondary">
                  We believe in the power of teamwork, fostering partnerships with clients and working together to achieve shared goals.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-3">Excellence</h3>
                <p className="text-secondary">
                  We are committed to delivering the highest quality in everything we do, exceeding expectations and setting new standards.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-3">Integrity</h3>
                <p className="text-secondary">
                  We operate with honesty, transparency, and ethical behavior in all our interactions and business practices.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-3">Client Focus</h3>
                <p className="text-secondary">
                  We prioritize our clients' needs, building lasting relationships and ensuring their success is at the heart of our work.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-3">Global Perspective</h3>
                <p className="text-secondary">
                  We embrace diversity of thought and culture, bringing a global perspective to local challenges and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}