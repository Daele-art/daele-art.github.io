
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Laptop, Users, Check, ArrowRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Diensten() {
  const availableServices = [
    {
      icon: Target,
      title: "1-op-1 Coaching",
      subtitle: "Beginnersniveau",
      description: "Persoonlijke begeleiding volledig gericht op jouw start met de ATG-methodiek. We maken je gewrichten sterker, bouwen basiskracht op en zorgen dat je pijnvrij en met vertrouwen kunt bewegen.",
      features: [
        "Focus op ATG fundamentals",
        "Pijnvrije bewegingspatronen aanleren",
        "Opbouw van basiskracht en mobiliteit",
        "Perfect voor beginners of na een blessure"
      ],
      popular: true,
      ctaText: "Plan Gratis Intake",
      ctaLink: createPageUrl("GratisStart") + "#plan-gesprek-section"
    },
    {
      icon: Laptop,
      title: "Online Begeleiding",
      subtitle: "Flexibel & Effectief",
      description: "Bouw stap-voor-stap een sterker en pijnvrij lichaam met bewezen ATG-methodes. Jij traint, ik zorg dat je techniek klopt en dat je elke week vooruitgang voelt.",
      features: [
        "Trainen waar en wanneer jij wilt",
        "Op maat gemaakte ATG schema",
        "Wekelijkse voortgang gesprekken",
        "Ideaal voor zelfstandige sporters"
      ],
      ctaText: "Start Online ATG Coaching",
      ctaLink: createPageUrl("OnlineCoaching")
    }
  ];
  
  const comingSoonServices = [
    {
      icon: Users,
      title: "Introductieworkshop ATG",
      description: "Een laagdrempelige kennismaking met de basisprincipes van Athletic Truth Group. Leer de 'waarom' achter oefeningen als tibialis raises, split squats en sled work."
    },
    {
      icon: Users,
      title: "Small Group Training",
      description: "Train de fundamentals in een kleine, motiverende groep van 3-6 personen. Persoonlijke aandacht blijft gegarandeerd. Binnenkort beschikbaar op onze nieuwe locatie."
    }
  ];

  const handleIntakeClick = () => {
    window.location.href = createPageUrl("GratisStart") + "#plan-gesprek-section";
  };

  return (
    <div className="performance-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-black text-4xl lg:text-6xl mb-6">
              <span className="gradient-text">ONZE DIENSTEN</span>
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-[#B0B3B8] max-w-3xl mx-auto leading-relaxed">
              Een gericht aanbod om jou te helpen starten met de ATG-methodiek. Sterk in de basis, groot in prestatie. Dat is waar we voor staan.
            </p>
          </div>
        </div>
      </section>

      {/* Available Services Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl">
              NU BESCHIKBAAR
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {availableServices.map((service, index) => (
              <Card key={index} className={`glass-card border-white/10 p-8 hover-lift relative flex flex-col ${service.popular ? 'ring-2 ring-[#0078B8]' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-[#0078B8] text-white px-4 py-2 rounded-full font-poppins font-semibold text-sm">
                      AANBEVOLEN START
                    </span>
                  </div>
                )}
                
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-2xl text-white">
                        {service.title}
                      </h3>
                      <p className="font-poppins text-[#0078B8] font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="font-poppins text-[#B0B3B8] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-[#0078B8] flex-shrink-0" />
                        <span className="font-poppins text-white">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-white/10">
                  <Button
                    className="w-full bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold py-3 rounded-lg transition-all duration-300"
                    onClick={() => {
                      if (service.ctaLink.includes("#plan-gesprek-section")) {
                        handleIntakeClick();
                      } else {
                        window.location.href = service.ctaLink;
                      }
                    }}
                  >
                    {service.ctaText}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">COMING SOON</span>
            </h2>
            <p className="font-poppins text-lg text-[#B0B3B8] max-w-2xl mx-auto">
              We werken hard om ons aanbod uit te breiden. Laat je gegevens achter als je interesse hebt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {comingSoonServices.map((service, index) => (
              <Card key={index} className="glass-card border-white/10 p-8 hover-lift flex flex-col">
                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-[#B0B3B8]" />
                    </div>
                    <h3 className="font-montserrat font-bold text-2xl text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-poppins text-[#B0B3B8] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <Link to={createPageUrl("Contact")} className="w-full">
                     <Button className="w-full bg-white hover:bg-white/90 text-[#0B0C10] font-poppins font-semibold py-3 rounded-lg transition-all duration-300">
                      <Clock className="w-4 h-4 mr-2" />
                      Houd mij op de hoogte
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-card border-white/10 p-12 hover-lift">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">STARTPUNT: DE GRATIS CHECK</span>
            </h2>
            
            <p className="font-poppins text-lg text-[#B0B3B8] mb-8 leading-relaxed max-w-2xl mx-auto">
              Elk succesvol traject begint met een goed startpunt. Plan een gratis en vrijblijvende intake om te ontdekken waar jouw kansen liggen.
            </p>
            
            <Button 
              onClick={handleIntakeClick}
              className="w-full sm:w-auto bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0078B8]/25"
            >
              <Calendar className="w-5 h-5 mr-3" />
              Plan Gratis Intake & Advies
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}
