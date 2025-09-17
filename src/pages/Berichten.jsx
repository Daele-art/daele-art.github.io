import React, { useState, useEffect } from "react";
import { ContactBericht } from "@/api/entities";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, User, Calendar, Eye, Check, AlertCircle, Clock, CheckCircle2 } from "lucide-react";

export default function BerichtenPage() {
    const [berichten, setBerichten] = useState([]);
    const [filter, setFilter] = useState("alle");
    const [sortBy, setSortBy] = useState("nieuwste");

    useEffect(() => {
        loadBerichten();
    }, []);

    const loadBerichten = async () => {
        const fetchedBerichten = await ContactBericht.list('-created_date');
        setBerichten(fetchedBerichten);
    };

    const markAsRead = async (bericht) => {
        await ContactBericht.update(bericht.id, { 
            status: 'gelezen',
            read_at: new Date().toISOString()
        });
        loadBerichten();
    };

    const markAsAnswered = async (bericht) => {
        await ContactBericht.update(bericht.id, { 
            status: 'beantwoord',
            answered_at: new Date().toISOString()
        });
        loadBerichten();
    };

    const filteredAndSortedBerichten = berichten
        .filter(bericht => {
            if (filter === "alle") return true;
            if (filter === "email-failed") return bericht.email_delivery_status === 'failed';
            return bericht.status === filter;
        })
        .sort((a, b) => {
            if (sortBy === "nieuwste") {
                return new Date(b.created_date) - new Date(a.created_date);
            } else if (sortBy === "oudste") {
                return new Date(a.created_date) - new Date(b.created_date);
            }
            return 0;
        });

    const statusColors = {
        nieuw: "bg-red-100 text-red-800",
        gelezen: "bg-yellow-100 text-yellow-800", 
        beantwoord: "bg-green-100 text-green-800"
    };

    const emailStatusColors = {
        queued: "bg-blue-100 text-blue-800",
        sent: "bg-green-100 text-green-800",
        failed: "bg-red-100 text-red-800"
    };

    const emailStatusIcons = {
        queued: Clock,
        sent: CheckCircle2,
        failed: AlertCircle
    };

    const emailStatusLabels = {
        queued: "In wachtrij",
        sent: "E-mail verzonden",
        failed: "E-mail mislukt"
    };

    return (
        <div className="performance-gradient">
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
                        <h1 className="font-montserrat font-black text-3xl lg:text-5xl">
                            <span className="gradient-text">ONTVANGEN BERICHTEN</span>
                        </h1>
                        
                        <div className="flex flex-wrap gap-2">
                            <Select value={filter} onValueChange={setFilter}>
                                <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                                    <SelectValue placeholder="Filter status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="alle">Alle berichten</SelectItem>
                                    <SelectItem value="nieuw">Nieuw</SelectItem>
                                    <SelectItem value="gelezen">Gelezen</SelectItem>
                                    <SelectItem value="beantwoord">Beantwoord</SelectItem>
                                    <SelectItem value="email-failed">E-mail mislukt</SelectItem>
                                </SelectContent>
                            </Select>

                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-32 bg-white/10 border-white/20 text-white">
                                    <SelectValue placeholder="Sorteren" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="nieuwste">Nieuwste</SelectItem>
                                    <SelectItem value="oudste">Oudste</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {filteredAndSortedBerichten.map((bericht) => {
                            const extraData = bericht.extra_data ? JSON.parse(bericht.extra_data) : {};
                            const EmailStatusIcon = emailStatusIcons[bericht.email_delivery_status] || Clock;
                            
                            return (
                                <Card key={bericht.id} className="glass-card border-white/10 p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-[#0078B8] rounded-full flex items-center justify-center">
                                                <User className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-montserrat font-bold text-xl text-white">
                                                    {bericht.name}
                                                </h3>
                                                <p className="font-poppins text-[#B0B3B8]">
                                                    {bericht.subject}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center gap-3 flex-wrap">
                                            <Badge className={statusColors[bericht.status]}>
                                                {bericht.status}
                                            </Badge>
                                            <Badge className={emailStatusColors[bericht.email_delivery_status]} title={bericht.email_delivery_error || ''}>
                                                <EmailStatusIcon className="w-3 h-3 mr-1" />
                                                {emailStatusLabels[bericht.email_delivery_status]}
                                            </Badge>
                                            <span className="text-[#B0B3B8] text-sm">
                                                {new Date(bericht.created_date).toLocaleDateString('nl-NL', {
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-[#0078B8]" />
                                            <a href={`mailto:${bericht.email}?subject=Re: ${bericht.subject}`} className="text-white hover:text-[#0078B8] transition-colors">
                                                {bericht.email}
                                            </a>
                                        </div>
                                        {bericht.phone && (
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-[#0078B8]" />
                                                <a href={`tel:${bericht.phone}`} className="text-white hover:text-[#0078B8] transition-colors">
                                                    {bericht.phone}
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    {bericht.formType === 'gratisStart' && extraData && Object.keys(extraData).length > 0 && (
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 p-4 bg-[#0078B8]/10 rounded-lg">
                                            {extraData.doel && (
                                                <div>
                                                    <span className="text-[#0078B8] font-semibold text-sm">Doel:</span>
                                                    <p className="text-white text-sm">{extraData.doel}</p>
                                                </div>
                                            )}
                                            {extraData.ervaring && (
                                                <div>
                                                    <span className="text-[#0078B8] font-semibold text-sm">Ervaring:</span>
                                                    <p className="text-white text-sm">{extraData.ervaring}</p>
                                                </div>
                                            )}
                                            {extraData.voorkeur && (
                                                <div>
                                                    <span className="text-[#0078B8] font-semibold text-sm">Voorkeur:</span>
                                                    <p className="text-white text-sm">{extraData.voorkeur}</p>
                                                </div>
                                            )}
                                            {extraData.pijnklachten && (
                                                <div>
                                                    <span className="text-[#0078B8] font-semibold text-sm">Pijnklachten:</span>
                                                    <p className="text-white text-sm">{extraData.pijnklachten}</p>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <h4 className="font-poppins font-semibold text-white mb-2">Bericht:</h4>
                                        <div className="bg-white/5 p-4 rounded-lg">
                                            <p className="font-poppins text-[#B0B3B8] leading-relaxed whitespace-pre-wrap">
                                                {bericht.message}
                                            </p>
                                        </div>
                                    </div>

                                    {bericht.email_delivery_status === 'failed' && bericht.email_delivery_error && (
                                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                            <h4 className="font-poppins font-semibold text-red-400 mb-2">E-mail fout:</h4>
                                            <p className="font-poppins text-red-300 text-sm">{bericht.email_delivery_error}</p>
                                        </div>
                                    )}

                                    {(bericht.ip_address || bericht.user_agent) && (
                                        <div className="mb-6 p-3 bg-white/5 rounded-lg">
                                            <h4 className="font-poppins font-semibold text-white text-sm mb-2">Metadata:</h4>
                                            <div className="space-y-1 text-xs text-[#B0B3B8]">
                                                {bericht.ip_address && <p>IP: {bericht.ip_address}</p>}
                                                {bericht.user_agent && <p>Browser: {bericht.user_agent}</p>}
                                                <p>ID: {bericht.id}</p>
                                                <p>Consent: {bericht.consent ? 'Ja' : 'Nee'}</p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap gap-3">
                                        {bericht.status === 'nieuw' && (
                                            <Button
                                                onClick={() => markAsRead(bericht)}
                                                variant="outline"
                                                size="sm"
                                                className="border-white/20 text-white hover:bg-white/10"
                                            >
                                                <Eye className="w-4 h-4 mr-2" />
                                                Markeer als gelezen
                                            </Button>
                                        )}
                                        {bericht.status !== 'beantwoord' && (
                                            <Button
                                                onClick={() => markAsAnswered(bericht)}
                                                size="sm"
                                                className="bg-[#0078B8] hover:bg-[#0078B8]/80"
                                            >
                                                <Check className="w-4 h-4 mr-2" />
                                                Markeer als beantwoord
                                            </Button>
                                        )}
                                        <Button
                                            onClick={() => window.location.href = `mailto:${bericht.email}?subject=Re: ${bericht.subject}`}
                                            variant="outline"
                                            size="sm"
                                            className="border-[#0078B8] text-[#0078B8] hover:bg-[#0078B8]/10"
                                        >
                                            <Mail className="w-4 h-4 mr-2" />
                                            Beantwoord via e-mail
                                        </Button>
                                        {bericht.phone && (
                                            <Button
                                                onClick={() => window.location.href = `tel:${bericht.phone}`}
                                                variant="outline"
                                                size="sm"
                                                className="border-[#0078B8] text-[#0078B8] hover:bg-[#0078B8]/10"
                                            >
                                                <Phone className="w-4 h-4 mr-2" />
                                                Bellen
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    {filteredAndSortedBerichten.length === 0 && (
                        <Card className="glass-card border-white/10 p-12 text-center">
                            <Mail className="w-16 h-16 text-[#B0B3B8] mx-auto mb-4" />
                            <h3 className="font-montserrat font-bold text-xl text-white mb-2">
                                Geen berichten gevonden
                            </h3>
                            <p className="font-poppins text-[#B0B3B8]">
                                {filter === "alle" 
                                    ? "Er zijn nog geen berichten ontvangen via het contactformulier."
                                    : `Er zijn geen berichten met status "${filter}".`
                                }
                            </p>
                        </Card>
                    )}
                </div>
            </section>
        </div>
    );
}