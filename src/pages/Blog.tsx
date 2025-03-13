import { Calendar, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    title: "5 sätt att skydda ditt företag mot cyberattacker",
    excerpt: "Cybersäkerhet är viktigare än någonsin. Här är fem effektiva sätt att skydda ditt företag mot de vanligaste typerna av cyberattacker.",
    date: "2023-10-15",
    author: "Isak Zunur",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Varför din verksamhet behöver en molnbaserad backup-lösning",
    excerpt: "Molnbaserade backup-lösningar erbjuder säkerhet, tillgänglighet och kostnadseffektivitet. Läs om fördelarna och hur du kommer igång.",
    date: "2023-09-28",
    author: "Davud Islamov",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Så optimerar du prestandan på din arbetsdator",
    excerpt: "Långsam dator? Här är enkla tips och tricks för att få din arbetsdator att fungera snabbare och effektivare.",
    date: "2023-09-10",
    author: "Yahyo Sodikov",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
];

const Blog = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Blogg</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1 duration-300">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-gray-900">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <a 
                  href={`/blog/${index}`} 
                  className="text-blue-600 font-medium hover:text-blue-800"
                >
                  Läs mer →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 