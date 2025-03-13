import { Server, Monitor, Wrench, Network, Users, CheckCircle, ArrowRight, Shield, Clock, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    icon: <Users className="h-12 w-12" />,
    title: 'IT-konsult',
    description: 'Vi erbjuder professionell IT-rådgivning för att hjälpa ditt företag att växa och optimera sina IT-system. Våra konsulter har bred erfarenhet inom olika branscher.',
    features: [
      'Strategisk IT-planering',
      'Systemanalys och optimering',
      'IT-säkerhetsrådgivning',
      'Molntjänster och implementering'
    ],
    benefits: 'Få expertråd som hjälper dig att fatta rätt beslut för din verksamhets IT-behov.',
    cta: 'Boka konsultation'
  },
  {
    icon: <Server className="h-12 w-12" />,
    title: 'Serveruppkoppling',
    description: 'Vi installerar, konfigurerar och underhåller serverlösningar för företag i alla storlekar. Från små företagsservrar till avancerade serverkluster.',
    features: [
      'Installation och konfiguration',
      'Virtualisering',
      'Backup-lösningar',
      'Övervakning och underhåll'
    ],
    benefits: 'Säkra, stabila och högpresterande serverlösningar som håller din verksamhet igång.',
    cta: 'Utforska serverlösningar'
  },
  {
    icon: <Monitor className="h-12 w-12" />,
    title: 'Datorbygge',
    description: 'Vi bygger skräddarsydda datorer för specifika behov, oavsett om det är för kontor, design, programmering eller gaming.',
    features: [
      'Anpassade specifikationer',
      'Högkvalitativa komponenter',
      'Optimerad prestanda',
      'Testning och kvalitetssäkring'
    ],
    benefits: 'Få en dator som är perfekt anpassad för just dina behov och krav.',
    cta: 'Beställ skräddarsydd dator'
  },
  {
    icon: <Network className="h-12 w-12" />,
    title: 'Uppkoppling av datorer',
    description: 'Vi hjälper till med installation, konfiguration och anslutning av datorer till ditt nätverk för sömlös integration i din IT-miljö.',
    features: [
      'Nätverksanslutning',
      'Programvaruinstallation',
      'Säkerhetskonfiguration',
      'Användarinställningar'
    ],
    benefits: 'Spara tid och resurser med professionell datorinstallation och konfiguration.',
    cta: 'Boka installation'
  },
  {
    icon: <Wrench className="h-12 w-12" />,
    title: 'Handyman internt',
    description: 'Intern IT-support och underhåll för att hålla din verksamhet igång smidigt.',
    features: [
      'Felsökning och reparation',
      'Hårdvaruuppgraderingar',
      'Programvaruuppdateringar',
      'Löpande underhåll'
    ],
    benefits: 'Snabb och pålitlig support när du behöver det, minimerar driftstopp.',
    cta: 'Kontakta support'
  }
];

const processSteps = [
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
    title: 'Konsultation',
    description: 'Vi börjar med att förstå dina specifika behov och mål.'
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-500" />,
    title: 'Planering',
    description: 'Vi utarbetar en detaljerad plan anpassad efter dina krav.'
  },
  {
    icon: <Settings className="h-8 w-8 text-blue-500" />,
    title: 'Implementering',
    description: 'Vi genomför lösningen med minimal störning för din verksamhet.'
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-500" />,
    title: 'Support',
    description: 'Vi erbjuder kontinuerlig support och underhåll efter implementering.'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

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

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Våra Tjänster
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Vi erbjuder ett brett utbud av IT-tjänster för att möta alla dina tekniska behov. 
            Från strategisk rådgivning till praktisk implementation och support.
          </motion.p>
        </div>

        {/* Process Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Vår process</h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            {processSteps.map((step, index) => (
              <div key={index} className="flex-1 relative mb-8 md:mb-0">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-blue-100 dark:bg-blue-900/30">
                    <ArrowRight className="absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-300 dark:text-blue-700" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                activeService === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveService(activeService === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                      Funktioner
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                          <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold mb-1 text-blue-700 dark:text-blue-400">
                        Fördelar:
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {service.benefits}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <button 
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveService(activeService === index ? null : index);
                    }}
                  >
                    {activeService === index ? 'Visa mindre' : 'Visa mer'}
                    <ArrowRight className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                      activeService === index ? 'rotate-90' : ''
                    }`} />
                  </button>
                  <a 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Redo att ta nästa steg?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Kontakta oss idag för att diskutera hur vi kan hjälpa dig med dina IT-behov. 
            Vi erbjuder skräddarsydda lösningar för alla typer av verksamheter.
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

export default Services;