import { Home, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col font-roboto text-secondary bg-light">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="w-full max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary">404</h1>
              <div className="h-2 w-24 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
              <h2 className="text-3xl md:text-4xl font-inter font-bold text-dark mb-4">Page Not Found</h2>
              <p className="text-lg text-secondary max-w-lg mx-auto mb-8">
                We're sorry, the page you requested could not be found. It may have been moved, deleted, or never existed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <a className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-inter font-medium rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
                    <Home className="mr-2 h-5 w-5" />
                    Back to Home
                  </a>
                </Link>
                <button 
                  onClick={() => window.history.back()} 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary border border-primary font-inter font-medium rounded-full hover:bg-blue-50 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Go Back
                </button>
              </div>
            </div>
            
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-inter font-semibold text-xl text-dark mb-4">Looking for something?</h3>
              <p className="text-secondary mb-6">Check out these popular pages:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/services">
                  <a className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
                    <h4 className="font-medium text-dark">Our Services</h4>
                    <p className="text-sm text-secondary">Explore our solutions for your business</p>
                  </a>
                </Link>
                <Link href="/about">
                  <a className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
                    <h4 className="font-medium text-dark">About Us</h4>
                    <p className="text-sm text-secondary">Learn more about our company</p>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
                    <h4 className="font-medium text-dark">Contact Us</h4>
                    <p className="text-sm text-secondary">Get in touch with our team</p>
                  </a>
                </Link>
                <div className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:shadow-md transition-all">
                  <h4 className="font-medium text-dark">Need Help?</h4>
                  <p className="text-sm text-secondary">Email us at <span className="text-primary">support@godivatech.com</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
