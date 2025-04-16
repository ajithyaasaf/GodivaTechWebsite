import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark mb-4">Our Services</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">Comprehensive technology solutions tailored to meet your business needs and drive growth</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border-t-4 border-primary group">
                <div className="p-4 bg-blue-50 rounded-full inline-block mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-3">{service.title}</h3>
                <p className="text-secondary mb-4">{service.description}</p>
                <a href="#" className="text-primary font-inter font-medium hover:text-blue-700 flex items-center">
                  Learn More 
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
