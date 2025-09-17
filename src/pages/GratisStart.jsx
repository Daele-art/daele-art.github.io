
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Phone, Mail, Zap, ClipboardList, Lightbulb } from "lucide-react";

export default function GratisStart() {
  useEffect(() => {
    // Check if there's a hash in the URL and scroll to it
    if (window.location.hash === '#plan-gesprek-section') {
      setTimeout(() => {
        const element = document.getElementById('plan-gesprek-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const whatToExpect = [
    {
      icon: ClipboardList,
      title: "Intake & Doelen",
      points: [
        "Wie ben je? Wat is je sport-/trainingsachtergrond?",
        "Waar loop je nu tegenaan (pijn, beperkingen, prestatiedoelen)?",
        "Wat wil je bereiken in de komende 3–6 maanden met ATG?",
        "Welke vorm van coaching past het beste bij jou?"
      ]
    },
    {
      icon: Lightbulb,
      title: "Persoonlijk ATG-Advies",
      points: [
        "Concreet advies: welke eerste ATG-stappen gaan jou het meest helpen?",
        "Voorbeeld hoe een 12-weeks ATG-traject eruit zou zien voor jou.",
        "Uitleg wat jij praktisch kunt verwachten van de coaching (Online of 1-op-1).",
        "Ruimte voor jouw vragen over de ATG-methodiek."
      ]
    }
  ];

  const whatYouGet = [
    "Duidelijk beeld van je huidige situatie en ATG-doelen.",
    "Eerste praktische ATG-tips om mee te starten.",
    "Inzicht welke vorm van ATG-coaching het beste bij jou past (Online of 1-op-1)."
  ];

  return (
    <div className="performance-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-black text-4xl lg:text-6xl mb-6">
              <span className="gradient-text">GRATIS KENNISMAKINGSGESPREK</span>
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-[#B0B3B8] max-w-3xl mx-auto leading-relaxed">
              Tijdens dit gesprek kijken we samen hoe de ATG-aanpak jou kan helpen sterker, mobieler en met meer plezier te bewegen.
              We bepalen ook welke vorm van coaching (Online of 1-op-1) het beste bij jou past.
            </p>
          </div>
          
          <div className="text-center">
            <Card className="inline-block glass-card border-[#0078B8]/50 p-4 hover-lift">
              <div className="flex items-center space-x-3">
                 <Zap className="w-6 h-6 text-[#0078B8]" />
                 <p className="font-poppins text-lg text-white font-semibold">
                   In 20 minuten helderheid over je ATG-doelen en de weg ernaartoe.
                 </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">WAT KUN JE VERWACHTEN?</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {whatToExpect.map((step, index) => (
              <Card key={index} className="glass-card border-white/10 p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white">
                    <span className="text-[#0078B8] mr-2">{index + 1}.</span>{step.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0078B8] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-poppins text-[#B0B3B8]">{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* What you get section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <Card className="glass-card border-white/10 p-8 lg:p-12 hover-lift">
            <div className="text-center mb-8">
              <h2 className="font-montserrat font-black text-2xl lg:text-3xl">
                <span className="gradient-text">WAT JE KRIJGT NA AFLOOP</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {whatYouGet.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#0078B8] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-poppins text-white">{benefit}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Booking Section */}
      <section id="plan-gesprek-section" className="pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card border-white/10 p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="font-montserrat font-black text-3xl lg:text-4xl mb-4">
                <span className="gradient-text">PLAN JOUW GRATIS GESPREK</span>
              </h2>
              <p className="font-poppins text-[#B0B3B8] max-w-2xl mx-auto">
                Klaar om te beginnen met ATG? Neem direct contact op om je gratis en vrijblijvende kennismakingsgesprek in te plannen.
                We bespreken zowel Online Coaching als 1-op-1 begeleiding.
              </p>
            </div>
            
            <div className="flex justify-center">
                <Button asChild className="w-full sm:w-auto bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0078B8]/25">
                    <a href="https://docs.google.com/forms/d/1AXq-S5lwuo6AZWx3hSnOX1vZqMGekTrX-yfq_xSsolw/viewform" target="_blank" rel="noopener noreferrer">
                        <ClipboardList className="w-5 h-5 mr-3" />
                        Plan Mijn Gratis ATG Intake
                    </a>
                </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
