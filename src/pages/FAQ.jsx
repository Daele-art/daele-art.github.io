
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar } from "lucide-react";
import { createPageUrl } from "@/utils";

export default function FAQ() {
  // Functie om soepel naar ankers te scrollen
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Voeg een kleine offset toe voor de sticky header
      const headerOffset = 120; // Hoogte van header + wat extra marge
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleIntakeClick = () => {
    window.location.href = createPageUrl("GratisStart") + "#plan-gesprek-section";
  };

  return (
    <div className="performance-gradient min-h-screen">
      <style>
        {`
          /* Custom CSS voor Accordion animaties */
          .accordion-content {
            overflow: hidden;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .accordion-content[data-state="open"] {
            animation: slideDownFadeIn 0.3s ease-out forwards;
          }
          
          .accordion-content[data-state="closed"] {
            animation: slideUpFadeOut 0.2s ease-out forwards;
          }

          @keyframes slideDownFadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideUpFadeOut {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(-10px);
            }
          }

          /* FAQ Accordion Styling - Override */
          .faq-accordion .accordion-trigger {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: .75rem;
            color: #FFFFFF;
            transition: all 0.3s ease;
          }

          .faq-accordion .accordion-trigger:hover {
            background: rgba(0, 120, 184, 0.1);
            border-color: rgba(0, 120, 184, 0.3);
          }

          /* Verberg alle standaard/ingebouwde iconen van het component */
          .faq-accordion .accordion-trigger svg,
          .faq-accordion .accordion-trigger .icon,
          .faq-accordion .accordion-trigger .chevron,
          .faq-accordion .accordion-trigger [class*="icon"] {
            display: none !important;
          }

          /* Één eigen chevron via ::after */
          .faq-accordion .accordion-trigger::after {
            content: "";
            width: 16px;
            height: 16px;
            flex: 0 0 16px;
            background: currentColor;
            -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z"/></svg>') center/contain no-repeat;
                    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6z"/></svg>') center/contain no-repeat;
            opacity: .9;
            transition: transform .2s ease, opacity .2s ease;
          }

          /* Rotatie bij open staat; werkt met aria-expanded=true of .is-open */
          .faq-accordion .accordion-trigger[aria-expanded="true"]::after,
          .faq-accordion .accordion-item.is-open > .accordion-trigger::after {
            transform: rotate(180deg);
            opacity: 1;
          }

          /* Huisstijl details */
          .faq-accordion .accordion-item {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,.25);
          }
          
          .faq-accordion .accordion-item + .accordion-item { 
            margin-top: 14px; 
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-montserrat font-black text-4xl lg:text-6xl mb-6 uppercase">
            <span className="gradient-text">FAQ – VEELGESTELDE VRAGEN</span>
          </h1>
          <p className="font-poppins text-lg lg:text-xl text-[#B0B3B8] italic">
            Alle antwoorden op één plek. Scroll of klik om jouw vraag te vinden.
          </p>
        </div>
      </section>

      {/* Internal Navigation */}
      <nav className="sticky top-16 lg:top-20 z-40 bg-[#0B0C10]/95 backdrop-blur-md border-b border-white/10 py-4 mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-2 lg:gap-6">
          <Button 
            variant="ghost" 
            className="text-[#B0B3B8] hover:text-[#0078B8] hover:bg-[#0078B8]/10 font-poppins px-4 py-2 rounded-lg text-sm lg:text-base transition-all duration-300" 
            onClick={() => scrollToSection('training-methodiek')}
          >
            Training & Methodiek
          </Button>
          <Button 
            variant="ghost" 
            className="text-[#B0B3B8] hover:text-[#0078B8] hover:bg-[#0078B8]/10 font-poppins px-4 py-2 rounded-lg text-sm lg:text-base transition-all duration-300" 
            onClick={() => scrollToSection('coaching-traject')}
          >
            Coaching & Traject
          </Button>
          <Button 
            variant="ghost" 
            className="text-[#B0B3B8] hover:text-[#0078B8] hover:bg-[#0078B8]/10 font-poppins px-4 py-2 rounded-lg text-sm lg:text-base transition-all duration-300" 
            onClick={() => scrollToSection('voeding-lifestyle')}
          >
            Voeding & Lifestyle
          </Button>
          <Button 
            variant="ghost" 
            className="text-[#B0B3B8] hover:text-[#0078B8] hover:bg-[#0078B8]/10 font-poppins px-4 py-2 rounded-lg text-sm lg:text-base transition-all duration-300" 
            onClick={() => scrollToSection('praktisch-inschrijven')}
          >
            Praktisch & Inschrijven
          </Button>
        </div>
      </nav>

      {/* FAQ Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Section 1: Training & Methodiek */}
        <section id="training-methodiek" className="mb-20 pt-8">
          <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-white uppercase mb-8 border-b border-[#0078B8]/30 pb-4">
            🏋️ Training & Methodiek
          </h2>
          <Accordion type="single" collapsible className="faq-accordion w-full space-y-4">
            <AccordionItem value="tm-1" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Wat is ATG in simpele woorden?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                ATG bouwt sterke gewrichten en bruikbare kracht op in grote, gecontroleerde bewegingshoeken. We werken met regressies/progressies zodat je veilig op jouw niveau start.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tm-3" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Moet ik altijd 12 weken doen?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Ja, we starten met 12 weken om een fundament te leggen en meetbare progressie te zien. Daarna kun je verlengen of opschalen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tm-4" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Hoe vaak moet ik trainen voor resultaat?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Richtlijn: 2–4 sessies per week. Dat stemmen we af op je doel, ervaring en agenda. Met 2 sessies p/w kun je al duidelijk vooruitgang boeken.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tm-5" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Hoe lang duurt een sessie?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Gemiddeld 20–40 minuten. Kort, gefocust en goed vol te houden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tm-6" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Kan ik dit combineren met mijn sport?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Ja. We ontwerpen je schema aanvullend op je sport of werklast, zodat prestaties en herstel in balans blijven.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tm-7" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Heb ik materiaal nodig?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Start kan zonder of met minimale tools (stoel, band, lichte dumbbells). Later kun je optioneel hulpmiddelen toevoegen (slant board, sled). We bieden altijd alternatieven.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="tm-8" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Is dit ook voor beginners?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Zeker. Alles is schaalbaar en je start altijd op een niveau dat past.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Section 2: Coaching & Traject */}
        <section id="coaching-traject" className="mb-20 pt-8">
          <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-white uppercase mb-8 border-b border-[#0078B8]/30 pb-4">
            👥 Coaching & Traject
          </h2>
          <Accordion type="single" collapsible className="faq-accordion w-full space-y-4">
            <AccordionItem value="ct-1" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Wat houdt Online Coaching precies in?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                <div className="space-y-3">
                  <p>Bij HPZ Online Coaching train je volledig op afstand, maar mét persoonlijke begeleiding. Alles loopt via onze coaching-app (Everfit):</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Schema's en oefenvideo's afgestemd op jouw niveau en doelen.</li>
                    <li>Video-feedback: jij stuurt je oefeningen in, wij checken je techniek en geven correcties.</li>
                    <li>Wekelijkse check-ins: korte evaluatie van je progressie en motivatie.</li>
                    <li>Onbeperkt vragen stellen via chat: altijd een reactie binnen 24 uur op werkdagen.</li>
                  </ul>
                  <p>Zo heb je flexibiliteit om te trainen waar en wanneer je wilt, zonder dat je persoonlijke begeleiding mist.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ct-2" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Wat houdt 1-op-1 Coaching in?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                <div className="space-y-3">
                  <p>Bij 1-op-1 Coaching train je samen met je coach tijdens live sessies (beperkt beschikbaar, op aanvraag). Dit betekent:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Directe techniekcorrectie tijdens de training.</li>
                    <li>Maatwerk per sessie, afgestemd op hoe je er die dag fysiek en mentaal voor staat.</li>
                    <li>Extra persoonlijke aandacht voor jouw specifieke doelen of uitdagingen.</li>
                    <li>Mogelijkheid om sneller en dieper te gaan in de uitvoering van de ATG-methodiek.</li>
                  </ul>
                  <p>1-op-1 Coaching is ideaal als je maximale begeleiding wilt, of als je sneller vertrouwen en zekerheid wilt opbouwen in je bewegingen.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ct-3" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Hoe werkt de app (Everfit)?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Je krijgt toegang tot schema's, oefenvideo's, voortgang en chat. Je stuurt oefenvideo's in → wij geven persoonlijke feedback en doen wekelijkse check-ins.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ct-4" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Wat gebeurt er na 12 weken?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                We evalueren je progressie. Keuzes: verlengen, opschalen (bijv. performance-module) of switch naar 1-op-1.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ct-5" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Hoe persoonlijk is de begeleiding online?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Je krijgt feedback op jouw techniek, we monitoren je voortgang en je kunt 24/7 vragen stellen (reactie binnen 24 uur op werkdagen).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ct-6" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Waar vinden 1-op-1 sessies plaats?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                In Zeeland (op afspraak) of in overleg op locatie. Exacte plek bepalen we tijdens de intake.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ct-7" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Kan ik tijdelijk pauzeren (vakantie/drukte)?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Ja. We kunnen weken doorschuiven of een light-week inplannen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Section 3: Voeding & Lifestyle */}
        <section id="voeding-lifestyle" className="mb-20 pt-8">
          <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-white uppercase mb-8 border-b border-[#0078B8]/30 pb-4">
            🥗 Voeding & Lifestyle
          </h2>
          <Accordion type="single" collapsible className="faq-accordion w-full space-y-4">
            <AccordionItem value="vl-1" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Bieden jullie ook voedingsbegeleiding?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Ja, als optie bij je traject. Praktische richtlijnen gericht op energie, herstel en prestaties. Indien gewenst integreren we voedingstracking in de app.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vl-2" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Moet ik op dieet?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Nee. We kiezen voor haalbare gewoonten die je training ondersteunen: eiwit/energie-balans, timing rond trainingen en slimme keuzes in jouw context.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vl-3" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Helpen jullie ook met slaap/herstel/stress?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Ja. We kijken holistisch naar training, herstel, slaap en dagelijkse belasting. Kleine aanpassingen leveren vaak grote winst op.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Section 4: Praktisch & Inschrijven */}
        <section id="praktisch-inschrijven" className="mb-20 pt-8">
          <h2 className="font-montserrat font-bold text-2xl lg:text-3xl text-white uppercase mb-8 border-b border-[#0078B8]/30 pb-4">
            💳 Praktisch & Inschrijven
          </h2>
          <Accordion type="single" collapsible className="faq-accordion w-full space-y-4">
            <AccordionItem value="pi-1" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Wat kost het traject?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Afhankelijk van traject (Online vs. 1-op-1) en eventuele opties (voeding, extra check-ins). Tijdens de gratis intake ontvang je een helder voorstel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pi-2" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Hoe plan ik de gratis intake?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Klik op Plan Gratis Intake en kies een moment. In ±20 minuten bespreken we doelen, achtergrond en krijg je een concreet startvoorstel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pi-3" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Welke betaalmethoden?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Gebruikelijk: iDEAL/kaart.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pi-4" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Is online coaching maandelijks opzegbaar?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Ja, jouw abonnement is maandelijks opzegbaar.<br /><br />
                Je kunt op elk moment opzeggen, dit gaat automatisch in aan het einde van de betaalde maand.<br /><br />
                Tot die tijd behoud je gewoon toegang tot de app en alle begeleiding.<br /><br />
                <strong className="text-white">Extra flexibel:</strong> je mag je traject 1 keer per 6 maanden pauzeren voor maximaal 1 maand, bijvoorbeeld tijdens vakantie of een drukke periode.<br /><br />
                👉 Zo weet je zeker dat je nooit vastzit, maar wel de ruimte hebt om consistent te bouwen aan jouw progressie.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pi-5" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Leeftijd – kan mijn zoon/dochter meedoen?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                Online trajecten zijn in principe 18+. Jonger kan alleen met ouderlijke toestemming en passend niveau. Bespreek dit tijdens de intake.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pi-6" className="accordion-item">
              <AccordionTrigger className="accordion-trigger font-poppins text-white text-left px-6 py-4 hover:no-underline">
                <span className="text-lg font-medium">Medische vragen of recente operaties?</span>
              </AccordionTrigger>
              <AccordionContent className="font-poppins text-[#B0B3B8] px-6 pb-6 leading-relaxed accordion-content">
                HPZ geeft geen medisch advies of diagnose. Overleg bij medische kwesties eerst met arts/fysio. Wij coachen binnen pijnvrije, veilige grenzen met schaalbare oefenvormen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* CTA Section */}
        <section className="pt-12">
          <Card className="bg-[#0078B8] border-[#0078B8] p-8 lg:p-12 text-center rounded-xl hover-lift">
            <h3 className="font-montserrat font-bold text-2xl lg:text-3xl text-white mb-4">
              Nog vragen?
            </h3>
            <p className="font-poppins text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Plan gratis jouw intakegesprek en krijg persoonlijk advies.
            </p>
            <Button 
              onClick={handleIntakeClick}
              className="bg-white hover:bg-white/90 text-[#0078B8] font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Plan Gratis Intake
            </Button>
          </Card>
        </section>

        {/* Disclaimer */}
        <section className="pt-8 text-center">
          <p className="font-poppins text-sm text-[#B0B3B8]">
            HPZ biedt geen medische diagnoses of behandelingen. Raadpleeg bij medische klachten altijd een professional.
          </p>
        </section>
      </div>
    </div>
  );
}
