import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Server } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Server className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-semibold text-gray-900">Trestech</span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <div className="relative group">
                  <Link
                    to="/"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Startsida
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group">
                  <Link
                    to="/about"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Om oss
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group">
                  <Link
                    to="/services"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Tjänster
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group">
                  <Link
                    to="/contact"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Kontakt
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group">
                  <Link
                    to="/faq"
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Vanliga Frågor
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div className="relative group">
                  <Link
                    to="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Startsida
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group">
                  <Link
                    to="/about"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Om oss
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group">
                  <Link
                    to="/services"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Tjänster
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group">
                  <Link
                    to="/contact"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Kontakt
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="relative group">
                  <Link
                    to="/faq"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 bg-transparent hover:text-white transition relative z-10"
                  >
                    Vanliga Frågor
                  </Link>
                  <div className="absolute inset-0 rounded-md border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>
          )}
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Tjänster</h3>
                <ul className="space-y-2">
                  <li>IT-konsult</li>
                  <li>Serveruppkoppling</li>
                  <li>Datorbygge</li>
                  <li>Uppkoppling av datorer</li>
                  <li>Handyman intärnt</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Öppettider</h3>
                <ul className="space-y-2">
                  <li>Måndag - Fredag: <span className="numeric">08:00</span> - <span className="numeric">17:00</span></li>
                  <li>Lördag - Söndag: Stängt</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center">
              <p>&copy; {new Date().getFullYear()} Trestech. Alla rättigheter förbehållna.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;