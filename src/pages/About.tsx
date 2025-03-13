import { motion } from 'framer-motion';
import { Users, Award, Clock, Zap, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Om Trestech
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Vi är ett dedikerat team av IT-experter som brinner för att leverera högkvalitativa tekniska lösningar till våra kunder.
          </motion.p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Vår historia</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Trestech grundades 2024 med en enkel vision: att göra avancerad IT tillgänglig för alla. 
                Vi började som ett litet team med stor passion för teknik och en övertygelse om att IT-lösningar 
                borde vara både kraftfulla och användarvänliga.
              </p>
              <p>
                Vi tror på att bygga långsiktiga relationer med våra kunder genom att leverera exceptionell 
                service och skräddarsydda lösningar som verkligen möter deras behov.
              </p>
              <p>
                Vi är stolta över att betjäna kunder i hela Sverige, från små företag till större 
                organisationer, och hjälpa dem att utnyttja teknikens fulla potential.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Trestech team" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 dark:bg-blue-500 text-white p-6 rounded-lg shadow-lg">
              <p className="font-bold text-xl">Grundat 2024</p>
              <p>Nystartad passion</p>
            </div>
          </motion.div>
        </div>

        {/* Our Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Våra värderingar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Innovation",
                description: "Vi håller oss alltid uppdaterade med de senaste teknologierna för att leverera moderna lösningar."
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Kvalitet",
                description: "Vi kompromissar aldrig med kvaliteten i vårt arbete och strävar alltid efter perfektion."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Passion",
                description: "Vi älskar det vi gör och det syns i varje projekt vi tar oss an."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Kundcentrerat",
                description: "Vi sätter alltid kundens behov först och bygger lösningar som verkligen gör skillnad."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-flex mb-4">
                  <div className="text-blue-600 dark:text-blue-400">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900 dark:text-white">Vårt team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Isak Zunur",
                role: "Grundare & VD",
                bio: "Isak har en passion för IT och grundade Trestech med visionen att göra avancerad teknik tillgänglig för alla."
              },
              {
                name: "Davud Islamov",
                role: "Grundare & VD",
                bio: "Davud har en djup teknisk kunskap med specialisering inom nätverkslösningar och cybersäkerhet. Han leder våra mest komplexa projekt."
              },
              {
                name: "Yahyo Sodikov",
                role: "Grundare & VD",
                bio: "Yahyo säkerställer att våra kunder alltid får den bästa servicen och att våra lösningar verkligen möter deras behov."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full inline-flex mb-4">
                  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Redo att arbeta med oss?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Vi är alltid redo att ta oss an nya utmaningar och hjälpa dig med dina IT-behov.
            Kontakta oss idag för att diskutera hur vi kan samarbeta.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Kontakta oss
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;