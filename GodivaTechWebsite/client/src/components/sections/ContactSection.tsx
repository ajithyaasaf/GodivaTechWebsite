import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark mb-6">Get In Touch</h2>
            <p className="text-secondary text-lg mb-8">
              Have a project in mind or questions about our services? Reach out to us using the form or contact information below.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-dark mb-1">Our Location</h3>
                  <p className="text-secondary">123 Tech Park, Anna Nagar, Madurai, Tamil Nadu 625020, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-dark mb-1">Call Us</h3>
                  <p className="text-secondary">+91 95000 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-dark mb-1">Email Us</h3>
                  <p className="text-secondary">info@godivatech.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-inter font-semibold text-dark mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
                <a href="#" className="bg-white p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="bg-white p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" className="bg-white p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-inter font-semibold text-2xl text-dark mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-secondary font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-primary focus:ring-primary'} focus:ring focus:ring-opacity-20 transition-colors`} 
                    placeholder="Your name" 
                    {...register("name")}
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-secondary font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-primary focus:ring-primary'} focus:ring focus:ring-opacity-20 transition-colors`} 
                    placeholder="your@email.com" 
                    {...register("email")}
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-secondary font-medium mb-2">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-20 transition-colors" 
                    placeholder="+91 12345 67890" 
                    {...register("phone")}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-secondary font-medium mb-2">Service of Interest</label>
                  <select 
                    id="service" 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-primary focus:ring-primary'} focus:ring focus:ring-opacity-20 transition-colors`} 
                    {...register("service")}
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && <p className="mt-1 text-red-500 text-sm">{errors.service.message}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-secondary font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-primary focus:ring-primary'} focus:ring focus:ring-opacity-20 transition-colors`} 
                    placeholder="Tell us about your project or inquiry" 
                    {...register("message")}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-primary text-white font-inter font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Google Maps Integration */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg h-80">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125766.39400134161!2d78.04902546259764!3d9.917826905456192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Godiva Tech Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
