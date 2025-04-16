export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-white to-blue-50 pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-dark leading-tight mb-6">
              Innovative <span className="text-primary">Tech Solutions</span> for Your Business
            </h1>
            <p className="text-secondary text-lg md:text-xl mb-8 max-w-xl">
              Godiva Tech delivers cutting-edge technology solutions to help businesses in Madurai and beyond transform, innovate, and thrive in the digital landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 bg-primary text-white font-inter font-medium rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
                Get in Touch
              </a>
              <a href="#services" className="px-8 py-3 bg-white text-primary border border-primary font-inter font-medium rounded-full hover:bg-blue-50 transition-colors">
                Our Services
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" 
              alt="Digital Business Solutions" 
              className="w-full h-auto rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
