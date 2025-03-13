import { Server, Monitor, Wrench, Network, Users, CheckCircle } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const defaultIcon = new Icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const homeFaqs = [
  {
    question: "Vilka typer av företag arbetar ni med?",
    answer: "Vi arbetar med företag i alla storlekar, från små företag till större organisationer. Vår expertis omfattar olika branscher och vi anpassar våra tjänster efter varje kunds specifika behov."
  },
  {
    question: "Hur snabbt kan ni hjälpa till vid IT-problem?",
    answer: "Vi strävar efter att ge support så snabbt som möjligt. För akuta ärenden försöker vi alltid ge assistans inom samma arbetsdag. För mindre brådskande ärenden bokar vi in en tid som passar er."
  },
  {
    question: "Erbjuder ni support på distans?",
    answer: "Ja, vi erbjuder fjärrsupport för många typer av IT-problem. Detta gör att vi kan lösa många problem snabbt och kostnadseffektivt utan att behöva göra ett fysiskt besök."
  }
];

// Add these animation variants near the top of the file, after the imports
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Home = () => {
  const position: [number, number] = [58.3252, 15.1240];
  const [imageLoaded, setImageLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Parallax effect for hero section
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="space-y-16 py-12 overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative h-[600px] overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: heroParallax }}
        >
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Tech background"
            className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </motion.div>
        
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
          style={{ opacity, y }}
        >
          <div className="text-white">
            <div className="flex items-center mb-6">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Din Partner för IT-lösningar
              </motion.h1>
              <motion.img 
                src="/TrestechlogoORIGINAL.png" 
                alt="Trestech Logo" 
                className="h-16 md:h-20 ml-4" 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ 
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.5, repeat: Infinity }
                }}
              />
            </div>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Vi på Trestech erbjuder professionella IT-tjänster med fokus på kvalitet och kundnöjdhet.
              Från serverinstallationer till skräddarsydda PC-byggen.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kontakta oss
              </motion.a>
              <motion.a
                href="/services"
                className="inline-block bg-white text-blue-600 border border-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Våra tjänster
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 30, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Varför välja oss?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Vi erbjuder professionella IT-lösningar med fokus på kvalitet, säkerhet och kundnöjdhet
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {[
              {
                icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
                title: "Expertis",
                description: "Över 5 års samlad erfarenhet inom IT-branschen"
              },
              {
                icon: <Users className="h-12 w-12 text-purple-600" />,
                title: "Kundservice",
                description: "Personlig service och support när du behöver det"
              },
              {
                icon: <Wrench className="h-12 w-12 text-indigo-600" />,
                title: "Kvalitet",
                description: "Högsta kvalitet på alla våra tjänster och produkter"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section with Reveal Animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Hitta oss</h2>
            <motion.div 
              className="h-[400px] rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MapContainer 
                center={position} 
                zoom={13} 
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={defaultIcon}>
                  <Popup>
                    Trestech <br />
                    Albacksvägen 8 Lgh 1002
                  </Popup>
                </Marker>
              </MapContainer>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section with Accordion Animation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Vanliga frågor
        </motion.h2>
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {homeFaqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-lg flex justify-between items-center text-gray-900 dark:text-white">
                  {faq.question}
                  <svg className="w-5 h-5 transform transition-transform duration-300 group-open:rotate-180 text-gray-600 dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </summary>
                <motion.div 
                  className="px-6 py-4 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </motion.div>
              </details>
            </motion.div>
          ))}
          <div className="text-center mt-8">
            <motion.a 
              href="/faq" 
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium inline-flex items-center"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Se alla vanliga frågor
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Enhanced Feature Card with Animation - Fix for the blue outline issue
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform outline-none"
    whileHover={{ y: -10 }}
  >
    <div className="flex flex-col items-center text-center">
      <motion.div 
        className="mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

export default Home;