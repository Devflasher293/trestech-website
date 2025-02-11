import { Mail, Phone, MapPin } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const Contact = () => {
  const position: [number, number] = [58.3252, 15.1240];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Kontakta oss</h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Kontaktinformation</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600 mr-3" />
                    <span className="numeric">070-071 17 69</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-3" />
                    <span>tres3.tech@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                    <span>Albacksvägen 8 Lgh 1002, 595 50 Mjölby</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-6">Öppettider</h2>
                <div className="space-y-2">
                  <p>Måndag - Fredag: <span className="numeric">08:00</span> - <span className="numeric">17:00</span></p>
                  <p>Lördag - Söndag: Stängt</p>
                </div>
              </div>
            </div>

            {/* Map */}
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
      </div>
    </div>
  );
};

export default Contact;