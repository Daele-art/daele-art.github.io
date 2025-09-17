
import React from "react";
import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Handshake, Globe, ArrowRight, Check, User, Star, Rocket, ShieldCheck, Zap, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function OverHPZ() {
  const values = [
    {
      icon: Target,
      title: "Doelgericht",
      description: "Elke training sluit aan op jouw persoonlijke doelen."
    },
    {
      icon: Handshake,
      title: "Persoonlijk",
      description: "Begeleiding die echt bij jou past."
    },
    {
      icon: TrendingUp,
      title: "Resultaatgericht",
      description: "Meetbare vooruitgang en blijvende ontwikkeling."
    },
    {
      icon: Globe,
      title: "Holistisch",
      description: "We kijken naar het geheel: lichaam, geest en leefstijl."
    }
  ];

  const methodiek = [
    {
      title: "Kennismaking & Analyse",
      points: ["Online intake & vragenlijst", "Doelen bespreken en afstemmen"]
    },
    {
      title: "Programma Ontwikkeling",
      points: ["Een op maat gemaakt plan volgens ATG-principes", "Progressieve opbouw, passend bij jouw niveau", "Functionele bewegingen in volledige bewegingsuitslag"]
    },
    {
      title: "Begeleiding & Coaching",
      points: ["Chat & video-feedback in de app", "Wekelijkse check-ins en voortgangsrapporten", "Monitoring van jouw voortgang", "Extra tips over mobiliteit, herstel en lifestyle"]
    }
  ];

  const atgWhy = [
    {
      icon: Move,
      title: "Sterker in elke beweging",
      description: "Je traint je lichaam in volledige bewegingsuitslagen, zodat kracht en mobiliteit hand in hand gaan."
    },
    {
      icon: ShieldCheck,
      title: "Blijvend fundament",
      description: "Je bouwt een basis die prestaties verbetert én je lichaam beter bestand maakt tegen overbelasting."
    },
    {
      icon: Zap,
      title: "Eenvoudig toepasbaar",
      description: "Met duidelijke progressies en praktische oefeningen kan iedereen starten, ongeacht niveau of ervaring."
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
          <div className="text-center">
            <h1 className="font-montserrat font-black text-4xl lg:text-6xl mb-6">
              <span className="gradient-text">OVER HPZ</span>
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-[#B0B3B8] max-w-3xl mx-auto leading-relaxed">
              Human Performance Zeeland (HPZ) is opgericht vanuit de overtuiging dat iedereen de kans verdient om sterker, mobieler en met plezier te bewegen. Wij combineren wetenschappelijk onderbouwde methodieken met persoonlijke begeleiding, zodat jij stap voor stap vooruitgang boekt en structurele ontwikkeling ervaart.
            </p>
          </div>
        </div>
      </section>

      {/* About Me & Mission/Vision Section */}
      <section className="pb-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* About Me */}
            <div className="lg:col-span-3">
              <Card className="glass-card border-white/10 p-8 lg:p-12 hover-lift">
                <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#0078B8]">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a634b2ef25071a588b8c69/4e1f5d022_Ontwerpzondertitel14.png" 
                      alt="Wesley Dalebout - Oprichter HPZ" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div>
                    <h2 className="font-montserrat font-black text-2xl lg:text-3xl mb-2">OVER MIJ – WESLEY DALEBOUT</h2>
                    <p className="font-poppins text-[#0078B8] font-semibold">Oprichter & Coach HPZ</p>
                  </div>
                </div>
                <div className="space-y-4 font-poppins text-[#B0B3B8] leading-relaxed">
                  <p>
                    Jarenlang zat ik vast in een cyclus van hamstring- en enkelblessures. Alles deed ik voor de sport die ik het liefst speel: voetbal. Maar vaak stond ik langs de lijn, terwijl mijn vrienden konden spelen en ik alleen kon toekijken.
                  </p>
                  <p>
                    De ommekeer kwam toen ik de <strong className="text-white">ATG-methodiek</strong> ontdekte. Voor het eerst leerde ik hoe je gewrichten en spieren stap voor stap sterker maakt, met volledige bewegingsuitslagen en progressie die je lichaam écht aankan. Daardoor kon ik mijn lichaam opnieuw opbouwen en sterker terugkomen.
                  </p>
                  <p>
                    Na coachingstrajecten bij gecertificeerde ATG-trainers besloot ik mezelf verder te verdiepen in deze methode. Inmiddels ben ik al anderhalf jaar blessurevrij en voel ik me sterker en fitter dan ooit.
                  </p>
                  <p>
                    Met HPZ wil ik anderen inspireren om sterker, veerkrachtiger en met meer plezier te bewegen. Mijn eigen ervaring heeft mij geleerd hoe belangrijk het is om stap voor stap een duurzaam fundament te bouwen.
                  </p>
                </div>
              </Card>
            </div>

            {/* Mission & Vision */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="glass-card border-white/10 p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#0078B8]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[#0078B8]" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white">ONZE MISSIE</h3>
                </div>
                <p className="font-poppins text-[#B0B3B8] italic leading-relaxed">
                  Human Performance Zeeland helpt mensen sterker, mobieler en veerkrachtiger te bewegen door stap voor stap een <strong className="text-white">structurele balans</strong> in het lichaam op te bouwen. Met een praktische en resultaatgerichte aanpak werken we samen aan duurzame prestaties, passend bij elk niveau.
                </p>
              </Card>
              <Card className="glass-card border-white/10 p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#0078B8]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-6 h-6 text-[#0078B8]" />
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white">ONZE VISIE</h3>
                </div>
                <p className="font-poppins text-[#B0B3B8] italic leading-relaxed">
                  Wij geloven dat iedereen recht heeft op een lichaam dat een leven lang mee kan – vrij van beperkingen, in <strong className="text-white">structurele balans</strong>, sterk in de basis en klaar voor elke uitdaging.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl">
              <span className="gradient-text">ONZE WAARDEN</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="glass-card border-white/10 p-6 text-center hover-lift">
                 <div className="w-16 h-16 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-2">{value.title}</h3>
                <p className="font-poppins text-sm text-[#B0B3B8]">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ATG Methodiek */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">ONZE AANPAK: ATG-METHODIEK</span>
            </h2>
            <p className="font-poppins text-lg text-[#B0B3B8] max-w-3xl mx-auto leading-relaxed">
              De Athletic Truth Group (ATG) is een vernieuwende benadering van krachttraining die focust op mobiliteit, functionele kracht en progressieve opbouw. Onze aanpak bestaat uit drie duidelijke stappen.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {methodiek.map((stap, index) => (
              <Card key={index} className="glass-card border-white/10 p-8 hover-lift">
                <div className="flex items-center space-x-4 mb-6">
                   <div className="w-12 h-12 bg-[#0078B8] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-xl text-white">
                    {stap.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {stap.points.map((point, pointIndex) => (
                    <div key={pointIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-[#0078B8] flex-shrink-0 mt-1" />
                      <span className="font-poppins text-[#B0B3B8]">{point}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mb-16">
            <h3 className="font-montserrat font-black text-2xl lg:text-3xl mb-6">
              WAAROM DE ATG-METHODIEK WERKT
            </h3>
            <p className="font-poppins text-lg text-[#B0B3B8] max-w-2xl mx-auto mb-8">
              Athletic Truth Group (ATG) heeft een revolutionaire benadering van kracht en mobiliteit ontwikkeld.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {atgWhy.map((reason) => (
              <Card key={reason.title} className="glass-card border-white/10 p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-poppins font-semibold text-white text-lg mb-2">{reason.title}</h4>
                <p className="font-poppins text-[#B0B3B8]">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-card border-white/10 p-12 hover-lift">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">KLAAR OM TE STARTEN?</span>
            </h2>
            
            <p className="font-poppins text-lg text-[#B0B3B8] mb-8 leading-relaxed max-w-2xl mx-auto">
              Ontdek wat HPZ voor jou kan betekenen. Zet de eerste stap naar een sterker, mobieler en duurzamer lichaam.
            </p>
            
            <Button 
              onClick={handleIntakeClick}
              className="w-full sm:w-auto bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0078B8]/25 hover-lift"
            >
              Plan hier een gratis kennismakingsgesprek
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
}

