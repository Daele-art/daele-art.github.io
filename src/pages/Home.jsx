
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Target, Users, Trophy, Calendar, Check, Star, Laptop, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Home() {
  const benefits = [
    "Progressie stap voor stap, passend bij jouw niveau",
    "Kracht en mobiliteit in balans",
    "Effectieve ATG-aanpak",
    "Persoonlijke coaching en support"
  ];

  const services = [
    {
      icon: Target,
      title: "1-op-1 Coaching",
      subtitle: "Exclusieve Begeleiding",
      description: "Persoonlijke begeleiding volledig gericht op bewegingsvrijheid en kracht ontwikkelen met de bewezen ATG-methodiek. Intensieve maatwerk begeleiding voor maximaal resultaat.",
      cta: "Plan Gratis Intake",
      link: createPageUrl("GratisStart") + "#plan-gesprek-section",
      tag: "Beperkt aantal plaatsen"
    },
    {
      icon: Laptop,
      title: "Online Coaching",
      subtitle: "Flexibel & Effectief",
      description: "Train waar en wanneer je wilt, met duidelijke ATG-oefeningen die je sterker en vrijer laten bewegen.",
      cta: "Ontdek Online Trainen",
      link: createPageUrl("OnlineCoaching"),
      tag: "Nu beschikbaar",
      popular: true // Mark as popular
    },
    {
      icon: Users,
      title: "Introductieworkshop",
      subtitle: "ATG Fundamentals",
      description: "Kennismaking met de ATG basisprincipes in een interactieve sessie.",
      cta: "Meer Info",
      link: createPageUrl("Diensten"),
      tag: "Coming Soon"
    }
  ];

  const testimonials = [
    {
      name: "Mark van der Berg",
      text: "Na maanden rugpijn ben ik eindelijk pijnvrij dankzij HPZ. Ik voel me sterker dan ooit.",
      rating: 5
    },
    {
      name: "Lisa Janssen",
      text: "De ATG-methodiek heeft mijn prestaties naar een hoger niveau getild. Ongelooflijk!",
      rating: 5
    },
    {
      name: "Tom Reinders",
      text: "Professionele begeleiding en echt resultaat. HPZ heeft mijn sportverwachtingen overtroffen.",
      rating: 5
    }
  ];

  const handleIntakeClick = () => {
    // Navigeer naar de GratisStart pagina en scroll naar de juiste sectie
    window.location.href = createPageUrl("GratisStart") + "#plan-gesprek-section";
  };

  return (
    <div className="performance-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0078B8]/20 via-transparent to-[#0078B8]/10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
                <span className="gradient-text">STERK IN DE BASIS.</span>
                <br />
                <span className="text-white">GROOT IN PRESTATIE.</span>
              </h1>
              
              <p className="font-poppins text-lg lg:text-xl text-[#B0B3B8] mb-8 leading-relaxed max-w-2xl">
                Ontdek hoe je sterker en mobieler wordt met persoonlijke begeleiding. Samen bouwen we aan duurzaam resultaat met de effectieve ATG-aanpak.
              </p>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                    <div className="w-2 h-2 bg-[#0078B8] rounded-full"></div>
                    <span className="font-poppins text-white font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-4 items-center lg:items-start">
                <Button 
                  onClick={handleIntakeClick}
                  className="w-full max-w-sm lg:max-w-md bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0078B8]/25 hover-lift"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Plan Gratis Intake & Advies
                </Button>
                
                <Link to={createPageUrl("OnlineCoaching")} className="w-full max-w-sm lg:max-w-md">
                  <Button className="w-full bg-white hover:bg-white/90 text-[#0B0C10] font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
                    Ontdek Online ATG Coaching
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] glass-card rounded-2xl p-8 hover-lift">
                <div className="h-full flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20 bg-[#0078B8] rounded-full flex items-center justify-center mb-6">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-montserrat font-bold text-2xl text-white mb-4">
                    JOUW DOELEN,<br />ONZE BEGELEIDING
                  </h3>
                  <p className="font-poppins text-[#B0B3B8] leading-relaxed">
                    Samen bouwen we aan een sterk fundament voor duurzaam resultaat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Kiezen voor HPZ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">WAAROM KIEZEN VOOR HPZ?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card border-white/10 p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                PERSOONLIJKE AANPAK
              </h3>
              <p className="font-poppins text-[#B0B3B8] leading-relaxed">
                Elk traject wordt volledig afgestemd op jouw situatie, doelen en niveau. Geen standaard programma's, maar maatwerk dat écht werkt.
              </p>
            </Card>

            <Card className="glass-card border-white/10 p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                FUNDAMENTELE STERKTE
              </h3>
              <p className="font-poppins text-[#B0B3B8] leading-relaxed">
                Wij bouwen op de kernprincipes van de ATG-methodiek. Dit is geen trend, maar een duurzame aanpak voor sterke gewrichten en blijvende prestaties.
              </p>
            </Card>

            <Card className="glass-card border-white/10 p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-white mb-4">
                DUURZAAM RESULTAAT
              </h3>
              <p className="font-poppins text-[#B0B3B8] leading-relaxed">
                We bouwen stap voor stap aan een sterk fundament. Geen snelle fixes, maar structurele vooruitgang die een leven lang meegaat.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">HOE KUNNEN WE JE HELPEN?</span>
            </h2>
            <p className="font-poppins text-lg text-[#B0B3B8] max-w-2xl mx-auto">
              Of je nu net begint of een specifiek doel hebt, wij hebben een ATG-traject voor jou.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`glass-card border-white/10 p-8 hover-lift group cursor-pointer flex flex-col relative ${service.popular ? 'ring-2 ring-[#0078B8]' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-[#0078B8] text-white px-4 py-2 rounded-full font-poppins font-semibold text-sm">
                      AANBEVOLEN
                    </span>
                  </div>
                )}
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    {service.tag && (
                      <span className={`font-poppins font-semibold text-xs px-3 py-1 rounded-full ${service.tag === 'Coming Soon' ? 'bg-white/10 text-[#B0B3B8]' : 'bg-[#0078B8]/20 text-[#0078B8]'}`}>
                        {service.tag}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                    {service.title}
                  </h3>
                  
                  {service.subtitle && (
                    <p className="font-poppins text-[#0078B8] font-medium mb-4">
                      {service.subtitle}
                    </p>
                  )}
                  
                  <p className="font-poppins text-[#B0B3B8] mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <Link to={service.link}>
                    <Button 
                      className="w-full bg-white hover:bg-white/90 text-[#0B0C10] font-poppins font-semibold rounded-lg transition-all duration-300"
                      onClick={service.link.includes("#plan-gesprek-section") ? (e) => {
                        e.preventDefault();
                        handleIntakeClick();
                      } : undefined}
                    >
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to={createPageUrl("Diensten")}>
              <Button className="bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0078B8]/25">
                Ontdek Jouw Volledige Potentieel
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">WAT ZEGGEN ONZE KLANTEN</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card border-white/10 p-8 hover-lift">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#0078B8] fill-current" />
                  ))}
                </div>
                
                <blockquote className="font-poppins text-[#B0B3B8] italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="border-t border-white/10 pt-4">
                  <cite className="font-poppins font-semibold text-white not-italic">
                    — {testimonial.name}
                  </cite>
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
              <span className="gradient-text">KLAAR VOOR DE VOLGENDE STAP?</span>
            </h2>
            
            <p className="font-poppins text-lg text-[#B0B3B8] mb-8 leading-relaxed max-w-2xl mx-auto">
              Start vandaag nog met een gratis intake en adviesgesprek. 
              Ontdek waar jij staat en wat jouw potentieel is.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleIntakeClick}
                className="w-full sm:w-auto bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0078B8]/25"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Plan Gratis Intake & Advies
              </Button>
              
              <Link to={createPageUrl("Contact")}>
                <Button className="w-full sm:w-auto bg-white hover:bg-white/90 text-[#0B0C10] font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
                  Stel Een Vraag
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
