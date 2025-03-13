import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import React, { useEffect } from 'react';

// Fix for default marker icon
const defaultIcon = new Icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// Map event handlers component
const MapEventHandlers = ({ onReady, onError }: { onReady: () => void, onError: () => void }) => {
  const map = useMap();
  
  useEffect(() => {
    map.on('load', onReady);
    map.on('error', onError);
    
    return () => {
      map.off('load', onReady);
      map.off('error', onError);
    };
  }, [map, onReady, onError]);
  
  return null;
};

const Contact = () => {
  const position: [number, number] = [58.3252, 15.1240];
  const [mapError, setMapError] = React.useState(false);

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
            Kontakta oss
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Har du frågor eller behöver hjälp? Kontakta oss via telefon eller e-post så återkommer vi så snart som möjligt.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Kontakta oss direkt</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Telefon</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">+46 70 123 45 67</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Måndag-Fredag, 08:00-17:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">E-post</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">tres3.tech@gmail.com</p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Vi svarar vanligtvis inom 24 timmar</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                      <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sociala medier</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Du kan även kontakta oss via våra sociala medier för snabbare svar.
                    </p>
                    <div className="flex space-x-4 mt-3">
                      <a href="#" className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Callout */}
              <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Vanliga frågor</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Kolla gärna vår FAQ-sida där vi har samlat svar på de vanligaste frågorna.
                </p>
                <a 
                  href="/faq" 
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Se vanliga frågor
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Location Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Hitta oss</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Adress</h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Albacksvägen 8 Lgh 1002<br />
                      Linköping, 58941
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Öppettider</h3>
                    <div className="mt-1 space-y-1">
                      <p className="text-gray-600 dark:text-gray-300">Måndag-Fredag: 08:00-17:00</p>
                      <p className="text-gray-600 dark:text-gray-300">Lördag-Söndag: Stängt</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="h-[300px] rounded-lg overflow-hidden">
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
                  <MapEventHandlers 
                    onReady={() => setMapError(false)} 
                    onError={() => setMapError(true)} 
                  />
                </MapContainer>
              </div>
              
              {mapError && (
                <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-md">
                  Det gick inte att ladda kartan. Vänligen försök igen senare.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;