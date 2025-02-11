import { Server, Monitor, Wrench, Network, Users, CheckCircle} from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const defaultIcon = new Icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const keyOfferings = [
  {
    icon: <Server className="h-16 w-16" />,
    title: "IT-lösningar",
    description: "Kompletta IT-lösningar för företag och organisationer"
  },
  {
    icon: <Monitor className="h-16 w-16" />,
    title: "Hårdvara",
    description: "Skräddarsydda datorer och servrar efter dina behov"
  },
  {
    icon: <Network className="h-16 w-16" />,
    title: "Nätverk",
    description: "Säker och effektiv nätverksinfrastruktur"
  }
];

const Home = () => {
  const position: [number, number] = [58.3252, 15.1240];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Tech background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Din Partner för IT-lösningar
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Vi på Trestech erbjuder professionella IT-tjänster med fokus på kvalitet och kundnöjdhet.
              Från serverinstallationer till skräddarsydda PC-byggen.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Kontakta oss
            </a>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Vad vi erbjuder</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi levererar helhetslösningar inom IT med fokus på kvalitet, säkerhet och användarvänlighet
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {keyOfferings.map((offering) => (
            <div 
              key={offering.title}
              className="text-center p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                <div className="text-blue-600">{offering.icon}</div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{offering.title}</h3>
              <p className="text-gray-600">{offering.description}</p>
              <a 
                href="/services" 
                className="inline-block mt-6 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Läs mer →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-br from-blue-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Varför välja oss?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CheckCircle className="h-12 w-12 text-blue-600" />}
              title="Expertis"
              description="Över 5 års samlad erfarenhet inom IT-branschen"
            />
            <FeatureCard
              icon={<Users className="h-12 w-12 text-purple-600" />}
              title="Kundservice"
              description="Personlig service och support när du behöver det"
            />
            <FeatureCard
              icon={<Wrench className="h-12 w-12 text-indigo-600" />}
              title="Kvalitet"
              description="Högsta kvalitet på alla våra tjänster och produkter"
            />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Hitta oss</h2>
            <div className="h-[400px] rounded-lg overflow-hidden">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Home;