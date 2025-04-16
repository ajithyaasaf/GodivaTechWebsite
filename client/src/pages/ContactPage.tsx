import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";
import { ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "wouter";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="font-roboto text-secondary bg-light">
      <Header />
      <main>
        {/* Page Banner */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="font-inter font-bold text-4xl md:text-5xl mb-4">Contact Us</h1>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
                Get in touch with our team to discuss your project needs
              </p>
              <div className="flex items-center text-sm md:text-base">
                <Link href="/">
                  <div className="text-white hover:text-blue-200 transition-colors cursor-pointer">Home</div>
                </Link>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span>Contact</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Info Boxes */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24">
              {/* Box 1 */}
              <div className="bg-white rounded-xl p-8 shadow-xl text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-2">Visit Our Office</h3>
                <p className="text-secondary">123 Tech Park, Anna Nagar</p>
                <p className="text-secondary">Madurai, Tamil Nadu 625020</p>
                <p className="text-secondary">India</p>
              </div>
              
              {/* Box 2 */}
              <div className="bg-white rounded-xl p-8 shadow-xl text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-2">Call Us</h3>
                <p className="text-secondary">+91 95000 12345</p>
                <p className="text-secondary">Monday - Friday: 9AM - 6PM</p>
                <p className="text-secondary">Saturday: 9AM - 1PM</p>
              </div>
              
              {/* Box 3 */}
              <div className="bg-white rounded-xl p-8 shadow-xl text-center">
                <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-2">Email Us</h3>
                <p className="text-secondary">info@godivatech.com</p>
                <p className="text-secondary">support@godivatech.com</p>
                <p className="text-secondary">careers@godivatech.com</p>
              </div>
            </div>
            
            <div className="mt-16 flex justify-center">
              <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 bg-primary text-white p-8">
                    <h3 className="font-inter font-semibold text-2xl mb-6">Contact Departments</h3>
                    <div className="space-y-4">
                      <button 
                        onClick={() => setActiveTab('general')}
                        className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                          activeTab === 'general' ? 'bg-white text-primary font-medium' : 'hover:bg-blue-700 text-white'
                        }`}
                      >
                        General Inquiries
                      </button>
                      <button 
                        onClick={() => setActiveTab('sales')}
                        className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                          activeTab === 'sales' ? 'bg-white text-primary font-medium' : 'hover:bg-blue-700 text-white'
                        }`}
                      >
                        Sales Department
                      </button>
                      <button 
                        onClick={() => setActiveTab('support')}
                        className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                          activeTab === 'support' ? 'bg-white text-primary font-medium' : 'hover:bg-blue-700 text-white'
                        }`}
                      >
                        Technical Support
                      </button>
                      <button 
                        onClick={() => setActiveTab('careers')}
                        className={`block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                          activeTab === 'careers' ? 'bg-white text-primary font-medium' : 'hover:bg-blue-700 text-white'
                        }`}
                      >
                        Careers
                      </button>
                    </div>
                    
                    <div className="mt-12">
                      <h4 className="font-medium text-lg mb-4">Follow Us</h4>
                      <div className="flex space-x-3">
                        <a href="#" className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                        </a>
                        <a href="#" className="p-2 rounded-full bg-blue-700 hover:bg-blue-800 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8">
                    {activeTab === 'general' && (
                      <div>
                        <h3 className="font-inter font-semibold text-2xl text-dark mb-4">General Inquiries</h3>
                        <p className="text-secondary mb-6">
                          Have a question about our services or want to learn more about how we can help your business? Get in touch with our team.
                        </p>
                        <div className="mb-4">
                          <p className="font-medium text-dark">Email:</p>
                          <p className="text-primary">info@godivatech.com</p>
                        </div>
                        <div className="mb-4">
                          <p className="font-medium text-dark">Phone:</p>
                          <p>+91 95000 12345</p>
                        </div>
                        <div>
                          <p className="font-medium text-dark">Response Time:</p>
                          <p>Within 24 hours</p>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'sales' && (
                      <div>
                        <h3 className="font-inter font-semibold text-2xl text-dark mb-4">Sales Department</h3>
                        <p className="text-secondary mb-6">
                          Ready to discuss your project requirements or request a quote? Our sales team is here to help you find the right solution.
                        </p>
                        <div className="mb-4">
                          <p className="font-medium text-dark">Email:</p>
                          <p className="text-primary">sales@godivatech.com</p>
                        </div>
                        <div className="mb-4">
                          <p className="font-medium text-dark">Phone:</p>
                          <p>+91 95000 67890</p>
                        </div>
                        <div>
                          <p className="font-medium text-dark">Response Time:</p>
                          <p>Within 12 hours</p>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'support' && (
                      <div>
                        <h3 className="font-inter font-semibold text-2xl text-dark mb-4">Technical Support</h3>
                        <p className="text-secondary mb-6">
                          Need assistance with an existing project or experiencing technical issues? Our support team is ready to help.
                        </p>
                        <div className="mb-4">
                          <p className="font-medium text-dark">Email:</p>
                          <p className="text-primary">support@godivatech.com</p>
                        </div>
                        <div className="mb-4">
                          <p className="font-medium text-dark">Phone:</p>
                          <p>+91 95000 45678</p>
                        </div>
                        <div className="mb-4">
                          <p className="font-medium text-dark">Support Hours:</p>
                          <p>Monday - Friday: 8AM - 8PM</p>
                          <p>Saturday: 9AM - 5PM</p>
                        </div>
                        <div>
                          <p className="font-medium text-dark">Emergency Support:</p>
                          <p>24/7 for Enterprise Clients</p>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'careers' && (
                      <div>
                        <h3 className="font-inter font-semibold text-2xl text-dark mb-4">Careers</h3>
                        <p className="text-secondary mb-6">
                          Interested in joining our team? Explore current opportunities and send us your resume.
                        </p>
                        <div className="mb-4">
                          <p className="font-medium text-dark">Email:</p>
                          <p className="text-primary">careers@godivatech.com</p>
                        </div>
                        <div className="mb-6">
                          <p className="font-medium text-dark">Current Openings:</p>
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Senior Full-Stack Developer</li>
                            <li>UI/UX Designer</li>
                            <li>Project Manager</li>
                            <li>DevOps Engineer</li>
                            <li>Marketing Specialist</li>
                          </ul>
                        </div>
                        <Link href="/careers">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-6 py-3 bg-primary text-white font-inter font-medium rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            View All Openings
                          </motion.button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <ContactSection />
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-inter font-bold text-3xl text-dark mb-4">Frequently Asked Questions</h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Find answers to common questions about our services and processes
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                      <span className="text-dark text-lg">What industries do you serve?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-secondary">
                      <p>We serve a wide range of industries including healthcare, finance, e-commerce, education, manufacturing, and non-profit organizations. Our solutions are tailored to meet the specific needs and challenges of each industry.</p>
                    </div>
                  </details>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                      <span className="text-dark text-lg">How long does a typical project take?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-secondary">
                      <p>Project timelines vary based on complexity, scope, and requirements. Simple websites might take 4-6 weeks, while complex enterprise applications can take 3-6 months or more. During our initial consultation, we'll provide a detailed timeline specific to your project.</p>
                    </div>
                  </details>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                      <span className="text-dark text-lg">What is your pricing model?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-secondary">
                      <p>We offer flexible pricing models including fixed-price projects, time and materials, and retainer arrangements. Our goal is to provide transparent pricing that aligns with your budget and project requirements. We'll discuss the most suitable option during our initial consultation.</p>
                    </div>
                  </details>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                      <span className="text-dark text-lg">Do you provide maintenance and support after launch?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-secondary">
                      <p>Yes, we offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally. Our support options include regular updates, security patches, performance monitoring, and technical assistance. We can customize a support plan based on your specific needs.</p>
                    </div>
                  </details>
                </div>
                
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                      <span className="text-dark text-lg">Can you work with our existing systems?</span>
                      <span className="transition group-open:rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-2 text-secondary">
                      <p>Absolutely! We specialize in integrating with existing systems and can develop solutions that work seamlessly with your current infrastructure. Our team is experienced in a wide range of technologies and can adapt to your specific technical environment.</p>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}