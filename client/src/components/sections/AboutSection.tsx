import { timelineEvents } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80" 
              alt="Godiva Tech Team" 
              className="rounded-xl shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark mb-6">About Godiva Tech</h2>
            <p className="text-secondary text-lg mb-6">
              Founded in Madurai, Godiva Tech has grown from a small startup to a leading technology solutions provider in the region. Our journey is characterized by innovation, excellence, and a deep commitment to our clients' success.
            </p>
            <p className="text-secondary text-lg mb-8">
              We combine technical expertise with industry knowledge to deliver solutions that address real business challenges. Our team of experienced professionals is dedicated to helping businesses leverage technology for sustainable growth.
            </p>
            
            <div className="mb-10">
              <h3 className="font-inter font-semibold text-xl text-dark mb-4">Our Mission</h3>
              <p className="text-secondary">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-primary font-inter font-bold text-3xl mb-2">10+</div>
                <p className="text-secondary">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-primary font-inter font-bold text-3xl mb-2">200+</div>
                <p className="text-secondary">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-primary font-inter font-bold text-3xl mb-2">50+</div>
                <p className="text-secondary">Team Members</p>
              </div>
            </div>
            
            <button className="inline-block px-8 py-3 bg-primary text-white font-inter font-medium rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl">
              Meet Our Team
            </button>
          </div>
        </div>
        
        {/* Timeline Section */}
        <div className="mt-20">
          <h3 className="font-inter font-bold text-2xl text-dark mb-10 text-center">Our Journey</h3>
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`${index % 2 === 0 ? 'md:col-start-1 md:col-end-2 md:text-right' : 'md:col-start-2 md:col-end-3'} relative`}>
                  <div className={`mb-4 ${index % 2 === 0 ? 'md:pl-12 md:pr-8' : 'md:pl-8 md:pr-12'}`}>
                    <div className={`absolute ${index % 2 === 0 ? 'right-0 md:right-0 top-0 md:left-auto transform translate-x-1/2 md:translate-x-0' : 'left-0 top-0 transform -translate-x-1/2'} w-6 h-6 rounded-full bg-primary shadow-lg z-10`}></div>
                    <span className="font-inter font-bold text-xl text-primary block mb-2">{event.year}</span>
                    <h4 className="font-inter font-semibold text-lg text-dark mb-2">{event.title}</h4>
                    <p className="text-secondary">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
