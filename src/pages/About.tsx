import { UserCog } from 'lucide-react';

const teamMembers = [
  {
    name: 'Isak Zunur',
    role: 'VD & Medgrundare',
  },
  {
    name: 'Davud Islamov',
    role: 'VD & Medgrundare',
  },
  {
    name: 'Yahyo Sodikov',
    role: 'VD & Medgrundare',
  },
];

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision and Goals */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-8 text-center">Om oss</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Vi är ett erfaret team av tre IT-specialister som hanterar allt från installation av elektronik till serverhantering vid interna flyttar. Med fokus på effektivitet och kvalitet säkerställer vi smidiga processer, optimerar tid och resurser samt levererar skräddarsydda lösningar. Vårt engagemang och flexibilitet garanterar ett professionellt resultat i varje projekt.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Våra Värderingar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Kvalitet</h3>
                <p className="text-gray-700">Vi strävar alltid efter högsta möjliga kvalitet i varje projekt vi åtar oss.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Effektivitet</h3>
                <p className="text-gray-700">Optimerade processer och smarta lösningar för bästa resultat.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">Engagemang</h3>
                <p className="text-gray-700">Personligt engagemang och dedikation i varje uppdrag.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">Vårt Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-8 flex flex-col items-center">
                  <UserCog className="w-24 h-24 text-blue-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;