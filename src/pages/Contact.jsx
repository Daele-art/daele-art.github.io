
import React from "react";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      details: ["+31 6 13 40 28 24", "Ma-Vr: 8:00 - 20:00"],
      action: "tel:+31613402824"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["Direct bereikbaar", "Snelle reactie gegarandeerd"],
      action: "https://wa.me/31613402824"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@humanperformancezeeland.nl", "We reageren binnen 24u"],
      action: "mailto:info@humanperformancezeeland.nl"
    },
    {
      icon: MapPin,
      title: "Locatie",
      details: ["Human Performance Center", "Zeeland, Nederland"],
      action: null
    },
    {
      icon: Clock,
      title: "Openingstijden",
      details: ["Ma-Vr: 6:00 - 21:00", "Za-Zo: 8:00 - 18:00"],
      action: null
    }
  ];

  return (
    <div className="performance-gradient">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-black text-4xl lg:text-6xl mb-6">
              <span className="gradient-text">CONTACT</span>
            </h1>
            <p className="font-poppins text-lg lg:text-xl text-[#B0B3B8] max-w-3xl mx-auto leading-relaxed">
              Heb je vragen over onze diensten, wil je advies op maat, of ben je klaar om te starten? 
              <span className="text-white font-semibold"> We helpen je graag verder.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-black text-2xl lg:text-3xl mb-4">
              <span className="gradient-text">DIRECT CONTACT</span>
            </h2>
            <p className="font-poppins text-[#B0B3B8]">
              Kies hieronder de methode die jou het beste uitkomt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="glass-card border-white/10 p-8 hover-lift">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-[#0078B8] rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-montserrat font-bold text-xl text-white mb-3">
                      {info.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`font-poppins break-all ${detailIndex === 0 ? 'text-white font-semibold text-lg' : 'text-[#B0B3B8]'}`}>
                          {info.action && detailIndex === 0 ? (
                            <a href={info.action} className="hover:text-[#0078B8] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
