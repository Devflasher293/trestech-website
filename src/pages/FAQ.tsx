const faqs = [
  {
    question: 'Vilka typer av företag arbetar ni med?',
    answer: 'Vi arbetar med företag i alla storlekar, från små företag till större organisationer. Vår expertis omfattar olika branscher och vi anpassar våra tjänster efter varje kunds specifika behov.',
  },
  {
    question: 'Hur snabbt kan ni hjälpa till vid IT-problem?',
    answer: 'Vi strävar efter att ge support så snabbt som möjligt. För akuta ärenden försöker vi alltid ge assistans inom samma arbetsdag. För mindre brådskande ärenden bokar vi in en tid som passar er.',
  },
  {
    question: 'Erbjuder ni support på distans?',
    answer: 'Ja, vi erbjuder fjärrsupport för många typer av IT-problem. Detta gör att vi kan lösa många problem snabbt och kostnadseffektivt utan att behöva göra ett fysiskt besök.',
  },
  {
    question: 'Vad kostar era tjänster?',
    answer: 'Våra priser varierar beroende på tjänstens omfattning och komplexitet. Vi erbjuder både timpris och fasta priser för projekt. Kontakta oss för en kostnadsfri offert.',
  },
  {
    question: 'Kan ni hjälpa till med datorsäkerhet?',
    answer: 'Ja, vi erbjuder omfattande säkerhetslösningar inklusive virusskydd, brandväggar, säkerhetskopiering och utbildning i IT-säkerhet för personal.',
  },
  {
    question: 'Hur fungerar processen för att bygga en anpassad dator?',
    answer: 'Vi börjar med att diskutera dina behov och budget. Därefter tar vi fram ett förslag på komponenter, går igenom det tillsammans med dig, och när allt är godkänt bygger vi datorn med högsta kvalitet och testar den noggrant.',
  },
  {
    question: 'Erbjuder ni serviceavtal?',
    answer: 'Ja, vi erbjuder olika typer av serviceavtal anpassade efter företagets storlek och behov. Detta kan inkludera regelbundet underhåll, support och övervakning av system.',
  },
  {
    question: 'Hur hanterar ni GDPR och datasäkerhet?',
    answer: 'Vi tar dataskydd på största allvar och följer alla GDPR-regler. Vi använder säkra metoder för datahantering och kan hjälpa er att säkerställa att era system också är GDPR-kompatibla.',
  },
];

const FAQ = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 text-center">Vanliga Frågor</h1>
        
        <div className="grid gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Har du fler frågor?</h2>
          <p className="text-gray-700 mb-6">
            Tveka inte att kontakta oss om du har andra frågor eller funderingar.
            Vi finns här för att hjälpa dig!
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kontakta oss
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;