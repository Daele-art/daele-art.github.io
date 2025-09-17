

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { User, Calendar, Target, Phone, Menu, X, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home") },
  { title: "Online Coaching", url: createPageUrl("OnlineCoaching") },
  { title: "Gratis Start", url: createPageUrl("GratisStart") },
  { title: "Over HPZ", url: createPageUrl("OverHPZ") },
  { title: "FAQ", url: createPageUrl("FAQ") },
  { title: "Contact", url: createPageUrl("Contact") }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    // Scroll naar boven bij paginawissel, tenzij er een # in de URL zit
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const isActivePage = (url) => location.pathname === url;

  const handleIntakeClick = () => {
    // Opent het Google Formulier direct in een nieuw tabblad
    window.open("https://docs.google.com/forms/d/1AXq-S5lwuo6AZWx3hSnOX1vZqMGekTrX-yfq_xSsolw/viewform", "_blank");
    setMobileMenuOpen(false); // Sluit ook het mobiele menu
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Poppins:wght@300;400;500;600&display=swap');
          
          .font-montserrat {
            font-family: 'Montserrat', sans-serif;
          }
          
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #FFFFFF 0%, #0078B8 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 120, 184, 0.15);
          }
          
          .performance-gradient {
            background: linear-gradient(135deg, #0B0C10 0%, #1a1b23 50%, #0B0C10 100%);
          }
          
          .page-transition-enter {
            animation: fadeIn 0.4s ease-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a634b2ef25071a588b8c69/06863dae8_LogoHPZ32.png" 
                alt="HPZ Logo" 
                className="h-16 lg:h-20"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`font-poppins font-medium transition-colors duration-300 hover:text-[#0078B8] ${
                    isActivePage(item.url) ? 'text-[#0078B8]' : 'text-[#B0B3B8]'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                onClick={handleIntakeClick}
                className="bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#0078B8]/25"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Plan Gratis Intake
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-[#0B0C10] border-l border-white/10">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a634b2ef25071a588b8c69/06863dae8_LogoHPZ32.png" 
                      alt="HPZ Logo" 
                      className="h-12"
                    />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <X className="w-5 h-5" />
                      </Button>
                    </SheetClose>
                  </div>
                  
                  <nav className="flex-1 space-y-4">
                    {navigationItems.map((item) => (
                      <SheetClose asChild key={item.title}>
                        <Link
                          to={item.url}
                          className={`block py-3 px-4 rounded-lg font-poppins font-medium transition-colors duration-300 ${
                            isActivePage(item.url)
                              ? 'bg-[#0078B8]/20 text-[#0078B8] border-l-4 border-[#0078B8]'
                              : 'text-[#B0B3B8] hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  
                  <div className="pt-6 border-t border-10">
                    <SheetClose asChild>
                      <Button 
                        onClick={handleIntakeClick}
                        className="w-full bg-[#0078B8] hover:bg-[#0078B8]/80 text-white font-poppins font-semibold py-3 rounded-lg"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Plan Gratis Intake
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        <div key={location.pathname} className="page-transition-enter">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/30 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a634b2ef25071a588b8c69/06863dae8_LogoHPZ32.png" 
                alt="HPZ Logo" 
                className="h-20 mb-4"
              />
              <h3 className="font-montserrat font-bold text-xl mb-4 gradient-text">
                STERK IN DE BASIS. GROOT IN PRESTATIE.
              </h3>
              <p className="text-[#B0B3B8] font-poppins leading-relaxed max-w-md">
                HPZ begeleid jou naar bewegingsvrijheid, kracht opbouwen en duurzaam beter presteren. Gebaseerd op Athletic Truth Group principes.
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-white mb-6">NAVIGATIE</h4>
              <div className="space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    className="block text-[#B0B3B8] hover:text-[#0078B8] font-poppins transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-white mb-6">CONTACT & SOCIAL</h4>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#0078B8]" />
                  <a href="tel:+31613402824" className="text-[#B0B3B8] font-poppins hover:text-[#0078B8] transition-colors" target="_blank" rel="noopener noreferrer">+31 6 13 40 28 24</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4 text-[#0078B8]" />
                  <a href="https://wa.me/31613402824" className="text-[#B0B3B8] font-poppins hover:text-[#0078B8] transition-colors" target="_blank" rel="noopener noreferrer">WhatsApp Direct</a>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-4 h-4 text-[#0078B8]" />
                  <a href="mailto:info@humanperformancezeeland.nl" className="text-[#B0B3B8] font-poppins hover:text-[#0078B8] transition-colors break-all" target="_blank" rel="noopener noreferrer">info@humanperformancezeeland.nl</a>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <h5 className="font-poppins font-semibold text-white text-sm mb-3">VOLG ONS</h5>
                <div className="flex">
                  <a 
                    href="https://www.instagram.com/humanperformancezeeland/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-[#0078B8] to-[#0078B8]/60 rounded-full flex items-center justify-center hover:bg-[#0078B8]/80 transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <p className="text-[#B0B3B8] font-poppins text-sm">
                © {new Date().getFullYear()} HPZ - Human Performance Zeeland. Alle rechten voorbehouden.
              </p>
              <div className="flex space-x-6 mt-4 lg:mt-0">
                <Link to={createPageUrl("Privacy")} className="text-[#B0B3B8] font-poppins text-sm hover:text-[#0078B8] cursor-pointer transition-colors duration-300">
                  Privacy & Disclaimer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

