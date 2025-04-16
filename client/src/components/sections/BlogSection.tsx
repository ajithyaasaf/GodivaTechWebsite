import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-dark mb-4">Latest Insights</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">Stay up-to-date with the latest technology trends, insights, and company news</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary bg-opacity-90 text-white text-xs font-inter px-3 py-1 rounded-full">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3 text-xs text-secondary">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg> 
                    {post.date}
                  </span>
                  <span className="mx-2">•</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> 
                    {post.readTime} min read
                  </span>
                </div>
                <h3 className="font-inter font-semibold text-xl text-dark mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-secondary mb-4">{post.excerpt}</p>
                <button className="text-primary font-inter font-medium hover:text-blue-700 flex items-center">
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-block px-8 py-3 bg-white text-primary border border-primary font-inter font-medium rounded-full hover:bg-blue-50 transition-colors">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
