import { Server, Monitor, Wrench, Network, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Users className="h-12 w-12" />,
    title: 'IT-konsult',
    description: 'Vi erbjuder professionell IT-rådgivning för att hjälpa ditt företag att växa och optimera sina IT-system. Våra konsulter har bred erfarenhet inom olika branscher.',
    features: [
      'Strategisk IT-planering',
      'System- och infrastrukturanalys',
      'IT-säkerhetsrådgivning',
      'Projektledning',
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    icon: <Server className="h-12 w-12" />,
    title: 'Serveruppkoppling',
    description: 'Vi installerar och konfigurerar serverlösningar som är skräddarsydda efter dina behov, med fokus på säkerhet och prestanda.',
    features: [
      'Server installation och konfiguration',
      'Virtualisering',
      'Backup-lösningar',
      'Övervakning och underhåll',
    ],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    icon: <Monitor className="h-12 w-12" />,
    title: 'Datorbygge',
    description: 'Skräddarsydda datorer byggda för dina specifika behov, vare sig det gäller gaming, kontor eller kreativt arbete.',
    features: [
      'Anpassade byggen',
      'Prestandaoptimering',
      'Kvalitetskomponenter',
      'Testning och validering',
    ],
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    icon: <Network className="h-12 w-12" />,
    title: 'Uppkoppling av datorer',
    description: 'Vi sätter upp och konfigurerar ditt nätverk för optimal prestanda och säkerhet.',
    features: [
      'Nätverksdesign',
      'WiFi-installation',
      'Säkerhetskonfiguration',
      'Prestandaoptimering',
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    icon: <Wrench className="h-12 w-12" />,
    title: 'Handyman intärnt',
    description: 'Intern IT-support och underhåll för att hålla din verksamhet igång smidigt.',
    features: [
      'Hårdvaruservice',
      'Mjukvarusupport',
      'Felsökning',
      'Förebyggande underhåll',
    ],
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
];

const Services = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Våra Tjänster</h1>
        
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12">
                    <div className="text-blue-600 mb-6">{service.icon}</div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-8 text-lg">{service.description}</p>
                    <div className="space-y-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center text-gray-700">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mr-3" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-[400px] lg:h-auto">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-900/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Behöver du hjälp?</h2>
          <p className="text-gray-700 mb-6">
            Kontakta oss för en kostnadsfri konsultation om hur vi kan hjälpa dig med dina IT-behov.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kontakta oss
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;