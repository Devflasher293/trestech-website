import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plus, Minus, ChevronRight, Filter } from 'lucide-react';

// FAQ categories
const categories = [
  "Alla",
  "IT-tjänster",
  "Hårdvara",
  "Support",
  "Priser"
];

// FAQ items with categories
const faqItems = [
  {
    question: "Vilka typer av företag arbetar ni med?",
    answer: "Vi arbetar med företag i alla storlekar, från små företag till större organisationer. Vår expertis omfattar olika branscher och vi anpassar våra tjänster efter varje kunds specifika behov.",
    category: "IT-tjänster"
  },
  {
    question: "Hur snabbt kan ni hjälpa till vid IT-problem?",
    answer: "Vi strävar efter att ge support så snabbt som möjligt. För akuta ärenden försöker vi alltid ge assistans inom samma arbetsdag. För mindre brådskande ärenden bokar vi in en tid som passar er.",
    category: "Support"
  },
  {
    question: "Erbjuder ni support på distans?",
    answer: "Ja, vi erbjuder fjärrsupport för många typer av IT-problem. Detta gör att vi kan lösa många problem snabbt och kostnadseffektivt utan att behöva göra ett fysiskt besök.",
    category: "Support"
  },
  {
    question: "Vad kostar era tjänster?",
    answer: "Våra priser varierar beroende på tjänst och omfattning. Vi erbjuder både fasta priser för specifika tjänster och timdebitering för löpande arbete. Kontakta oss för en kostnadsfri offert anpassad efter dina behov.",
    category: "Priser"
  },
  {
    question: "Kan ni bygga specialanpassade datorer för specifika behov?",
    answer: "Absolut! Vi specialiserar oss på att bygga skräddarsydda datorer för olika användningsområden som gaming, grafisk design, videoredigering eller vanligt kontorsarbete. Vi utgår från dina behov och budget för att skapa den optimala lösningen.",
    category: "Hårdvara"
  },
  {
    question: "Erbjuder ni serviceavtal för företag?",
    answer: "Ja, vi erbjuder olika typer av serviceavtal för företag. Dessa kan inkludera regelbundet underhåll, prioriterad support, säkerhetsuppdateringar och rådgivning. Vi skräddarsyr avtalen efter företagets storlek och behov.",
    category: "IT-tjänster"
  },
  {
    question: "Hur säkra är era molnlösningar?",
    answer: "Våra molnlösningar följer branschens bästa praxis för säkerhet. Vi använder kryptering, tvåfaktorsautentisering, regelbundna säkerhetskopieringar och kontinuerlig övervakning för att skydda dina data. Vi följer även GDPR och andra relevanta regelverk.",
    category: "IT-tjänster"
  },
  {
    question: "Kan ni hjälpa till med nätverk och wifi-installation?",
    answer: "Ja, vi erbjuder komplett installation och konfiguration av nätverk och wifi-lösningar för både hem och företag. Vi säkerställer optimal täckning, hastighet och säkerhet anpassat efter dina lokaler och behov.",
    category: "Hårdvara"
  },
  {
    question: "Hur lång garanti har jag på datorer ni bygger?",
    answer: "Alla våra skräddarsydda datorer kommer med 2 års garanti på arbete och komponenter. Vissa komponenter kan ha längre tillverkargaranti. Vi erbjuder även möjlighet att förlänga garantin mot en extra kostnad.",
    category: "Hårdvara"
  },
  {
    question: "Vad händer om min dator går sönder under garantitiden?",
    answer: "Om din dator går sönder under garantitiden reparerar eller byter vi ut de defekta delarna utan kostnad, förutsatt att skadan inte orsakats av olyckshändelse, felaktig användning eller obehöriga modifieringar.",
    category: "Support"
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Alla');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [theme, setTheme] = useState('light');

  // Filter FAQs based on search query and category
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'Alla' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Toggle FAQ item expansion
  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <div className="py-12 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Vanliga frågor
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hitta svar på de vanligaste frågorna om våra tjänster och produkter
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Sök efter frågor..."
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="mt-4 flex items-center">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-blue-600 font-medium"
            >
              <Filter className="h-4 w-4 mr-1" />
              Filtrera
              <motion.div
                animate={{ rotate: showFilters ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="h-4 w-4 ml-1" />
              </motion.div>
            </button>
            
            {activeCategory !== 'Alla' && (
              <div className="ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center">
                {activeCategory}
                <button 
                  onClick={() => setActiveCategory('Alla')}
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
          
          <AnimatePresence>
            {showFilters && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4"
              >
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-4"
        >
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border-l-4 ${
                  expandedItems.includes(index) 
                    ? 'border-blue-500' 
                    : theme === 'dark' 
                      ? 'border-gray-700' 
                      : 'border-transparent'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                >
                  <div className="flex items-center">
                    <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                      theme === 'dark' 
                        ? 'bg-blue-900/30 text-blue-400' 
                        : 'bg-blue-100 text-blue-800'
                    } mr-3`}>
                      {faq.category}
                    </span>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedItems.includes(index) ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 ml-2 p-1 rounded-full ${
                      expandedItems.includes(index)
                        ? theme === 'dark'
                          ? 'bg-blue-900/30 text-blue-400'
                          : 'bg-blue-100 text-blue-600'
                        : theme === 'dark'
                          ? 'bg-gray-700 text-gray-400'
                          : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {expandedItems.includes(index) ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {expandedItems.includes(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 py-4 ${
                        theme === 'dark' 
                          ? 'bg-gray-900/50 border-t border-gray-700' 
                          : 'bg-blue-50 border-t border-blue-100'
                      }`}>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="inline-block p-4 rounded-full bg-blue-100 mb-4">
                <Search className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Inga resultat hittades</h3>
              <p className="text-gray-600">
                Vi kunde inte hitta några frågor som matchar "{searchQuery}".
                <br />Försök med en annan sökterm eller kategori.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('Alla');
                }}
                className="mt-4 text-blue-600 font-medium hover:text-blue-800"
              >
                Återställ sökning
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Har du fortfarande frågor?</h2>
          <p className="mb-6">
            Kontakta oss direkt så hjälper vi dig med dina specifika frågor och behov.
          </p>
          <motion.a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontakta oss
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;