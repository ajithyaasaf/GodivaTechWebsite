import { portfolioItems } from "@/lib/data";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark mb-4">Our Portfolio</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">Explore our recent projects and see how we've helped businesses transform and grow</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-60 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-50"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="bg-primary text-white text-xs font-inter px-3 py-1 rounded-full">{item.category}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-inter font-semibold text-xl text-dark mb-2">{item.title}</h3>
                <p className="text-secondary mb-4">{item.description}</p>
                <button className="text-primary font-inter font-medium hover:text-blue-700 flex items-center">
                  View Case Study 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-block px-8 py-3 bg-white text-primary border border-primary font-inter font-medium rounded-full hover:bg-blue-50 transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
