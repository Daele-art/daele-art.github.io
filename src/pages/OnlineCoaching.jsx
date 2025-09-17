
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Target,
  TrendingUp,
  Play,
  MessageSquare,
  Calendar,
  CheckCircle2,
  Zap,
  Award,
  Lock
} from "lucide-react";
import { createPageUrl } from "@/utils";

export default function OnlineCoaching() {
  const targetAudience = [
    {
      icon: Target,
      title: "Beginners & herstarters",
      description: "Voor mensen die slim en veilig willen starten met de ATG-methodiek. We bouwen stap-voor-stap kracht en mobiliteit op, zodat je een sterk fundament legt en met vertrouwen vooruitgaat."
    },
    {
      icon: TrendingUp,
      title: "Enthousiaste sporters (18–45 jaar)",
      description: "Voor sporters die opnieuw balans en bewegingsvrijheid willen opbouwen met ATG. Door structureel te werken aan fundamentals maak je je lichaam sterker, stabieler en klaar voor meer uitdaging."
    },
    {
      icon: Award,
      title: "Ambitieuze mensen",
      description: "Voor iedereen die verder wil gaan dan standaard fitness. Samen bouwen we met de ATG-methodiek een duurzaam fundament van kracht en mobiliteit, waarmee je niet alleen nu groeit, maar ook in de toekomst vrij blijft bewegen."
    }
  ];

  const whatYouGet = [
    {
      icon: Smartphone,
      title: "Persoonlijk ATG-trainingsplan",
      description: "gebaseerd op jouw niveau en doelen"
    },
    {
      icon: TrendingUp,
      title: "Progressieve ATG-opbouw",
      description: "afgestemd op jouw mogelijkheden"
    },
    {
      icon: Play,
      title: "Video-instructies & feedback",
      description: "op jouw ATG-techniek"
    },
    {
      icon: Calendar,
      title: "Wekelijkse check-ins",
      description: "en voortgangsrapporten"
    },
    {
      icon: MessageSquare,
      title: "Onbeperkt vragen stellen",
      description: "over de ATG-methodiek"
    }
  ];

  const results = [
    "Structurele balans ontwikkeling met ATG-principes",
    "Beter en vrijer kunnen bewegen in alle richtingen",
    "Meer mobiliteit én kracht in volledige bewegingsuitslag",
    "Een duurzaam ATG-fundament voor sport en dagelijks leven"
  ];

  const handleStartClick = () => {
    window.location.href = createPageUrl("GratisStart") + "#plan-gesprek-section";
  };

  return (
    <div className="performance-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#0078B8]/20 text-[#0078B8] border-[#0078B8]/30 px-4 py-2 mb-6">
              🌍 ONLINE ATG COACHING
            </Badge>
            <h1 className="font-montserrat font-black text-4xl lg:text-6xl mb-6">
              <span className="gradient-text">FLEXIBEL, EFFECTIEF EN</span>
              <br />
              <span className="text-white">HELEMAAL AFGESTEMD OP JOU</span>
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-[#B0B3B8] max-w-4xl mx-auto leading-relaxed">
              Met HPZ Online Coaching werk je in <strong className="text-white">12 weken</strong> aan een sterk ATG-fundament.
              Via de Everfit-app krijg je persoonlijke schema's, video's van elke ATG-oefening en feedback op je techniek.
              Zo kun je trainen waar en wanneer jij wilt, <strong className="text-white">mét de ATG-begeleiding die je nodig hebt.</strong>
            </p>
          </div>

          <div className="text-center">
            <Card className="inline-block glass-card border-[#0078B8]/50 p-6 hover-lift">
              <div className="flex items-center space-x-4">
                 <Zap className="w-8 h-8 text-[#0078B8]" />
                 <div className="text-left">
                   <h3 className="font-montserrat font-bold text-xl text-white">
                     12 WEKEN ATG TRANSFORMATIE
                   </h3>
                   <p className="font-poppins text-[#B0B3B8]">
                     Van fundament naar kracht en mobiliteit
                   </p>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Voor Wie Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">VOOR WIE IS DIT?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((item, index) => (
              <Card key={index} className="glass-card border-white/10 p-8 text-center hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="font-poppins text-[#B0B3B8]">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wat Je Krijgt Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">WAT JE KRIJGT</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatYouGet.map((feature, index) => (
              <Card key={index} className="glass-card border-white/10 p-6 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0078B8]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#0078B8]" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="font-poppins text-[#B0B3B8] text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Het Resultaat Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card border-white/10 p-8 lg:p-12 hover-lift">
            <div className="text-center mb-12">
              <h2 className="font-montserrat font-black text-3xl lg:text-4xl mb-4">
                <span className="gradient-text">HET RESULTAAT</span>
              </h2>
              <p className="font-poppins text-lg text-[#B0B3B8]">
                Dit is wat je kunt verwachten na 12 weken HPZ Online Coaching:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {results.map((result, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#0078B8] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-poppins text-white text-lg font-medium">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="glass-card border-white/10 p-12 hover-lift">
            <h2 className="font-montserrat font-black text-3xl lg:text-5xl mb-6">
              <span className="gradient-text">KLAAR VOOR JOUW ATG TRANSFORMATIE?</span>
            </h2>

            <p className="font-poppins text-lg text-[#B0B3B8] mb-8 leading-relaxed max-w-2xl mx-auto">
              Start vandaag nog met je 12-weeks Online ATG Coaching traject.
              Bouw stap voor stap aan een sterker, mobieler lichaam met de bewezen ATG-methodiek.
            </p>

            <Button
              onClick={handleStartClick}
              className="w-full sm:w-auto bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold px-12 py-6 text-xl rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0078B8]/25 hover-lift mb-8"
            >
              👉 Start mijn 12-weeks ATG Online Coaching
            </Button>

            {/* Premium Option */}
            <div className="border-t border-white/10 pt-8">
              <Card className="glass-card border-white/5 p-6 bg-white/5">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Lock className="w-5 h-5 text-[#0078B8]" />
                  <h3 className="font-montserrat font-bold text-lg text-white">
                    EXCLUSIEVE 1-op-1 ATG Begeleiding
                  </h3>
                </div>
                <p className="font-poppins text-[#B0B3B8] text-sm italic max-w-2xl mx-auto">
                  Voor wie extra persoonlijke ATG-begeleiding zoekt, bied ik in overleg exclusieve 1-op-1 coaching aan in persoon. Beperkt beschikbaar, alleen op aanvraag.
                </p>
              </Card>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
