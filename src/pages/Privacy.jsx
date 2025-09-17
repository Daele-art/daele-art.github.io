
import React from 'react';
import { Card } from '@/components/ui/card';

export default function Privacy() {
  return (
    <div className="performance-gradient">
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-montserrat font-black text-4xl lg:text-6xl mb-6">
              <span className="gradient-text">PRIVACY & DISCLAIMER</span>
            </h1>
            <p className="font-poppins text-lg text-[#B0B3B8]">Laatste update: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <Card className="glass-card border-white/10 p-8 lg:p-12">
            <div className="prose prose-invert max-w-none font-poppins text-[#B0B3B8] prose-h2:font-montserrat prose-h2:text-white prose-h2:font-bold prose-h3:font-montserrat prose-h3:text-white prose-strong:text-white prose-a:text-[#0078B8] hover:prose-a:text-[#0078B8]/80">
              <p>Deze privacyverklaring en disclaimer gelden voor HPZ (Human Performance Zeeland), eigendom van en uitgevoerd door:</p>
              <ul>
                <li><strong>Naam:</strong> Wesley Dalebout</li>
                <li><strong>E-mail:</strong> <a href="mailto:info@humanperformancezeeland.nl" className="break-all">info@humanperformancezeeland.nl</a></li>
                <li><strong>Telefoon:</strong> +31 6 13 40 28 24</li>
              </ul>
              
              <h2>2. Persoonsgegevens die ik verwerk</h2>
              <p>HPZ verwerkt je persoonsgegevens doordat je gebruik maakt van mijn diensten en/of omdat je deze gegevens zelf aan mij verstrekt.</p>
              <p>Ik verwerk de volgende gegevens:</p>
              <ul>
                <li>Naam en voornaam</li>
                <li>Telefoonnummer</li>
                <li>E-mailadres</li>
                <li>Eventuele gezondheidsinformatie die je zelf deelt (zoals blessures, mobiliteitsproblemen of trainingsdoelen)</li>
              </ul>
              
              <h2>3. Bijzondere persoonsgegevens</h2>
              <p>Soms vraag ik informatie over je gezondheid of blessuregeschiedenis, omdat dit belangrijk kan zijn voor de opbouw van jouw training. Deze informatie valt onder bijzondere persoonsgegevens.</p>
              <p>Ik verwerk deze gegevens alleen met jouw uitdrukkelijke toestemming.</p>
              <p>Je mag altijd weigeren deze informatie te delen. In dat geval kan ik mijn begeleiding mogelijk minder goed afstemmen.</p>

              <h2>4. Doel van gegevensverwerking</h2>
              <p>HPZ verwerkt jouw gegevens uitsluitend voor de volgende doeleinden:</p>
              <ul>
                <li>Het plannen en uitvoeren van coachingstrajecten of trainingen.</li>
                <li>Het geven van advies en begeleiding rondom beweging en prestaties.</li>
                <li>Contact met jou onderhouden (telefonisch, via e-mail of andere kanalen).</li>
                <li>Het bijhouden van voortgang om jou beter te kunnen begeleiden.</li>
              </ul>
              
              <h2>5. Bewaartermijn</h2>
              <p>Ik bewaar je persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor ze zijn verzameld. In de praktijk betekent dit:</p>
              <ul>
                <li>Contactgegevens: maximaal 2 jaar na afronding van een traject.</li>
                <li>Gezondheidsinformatie: maximaal 1 jaar na afronding van een traject, tenzij je mij toestemming geeft dit langer te bewaren voor vervolgcoaching.</li>
              </ul>

              <h2>6. Delen met derden</h2>
              <p>HPZ deelt jouw gegevens niet met derden, tenzij dit noodzakelijk is om te voldoen aan een wettelijke verplichting.</p>
              
              <h2>7. Beveiliging van gegevens</h2>
              <p>Ik neem passende maatregelen om misbruik, verlies, onbevoegde toegang en ongewenste openbaarmaking te voorkomen.</p>
              
              <h2>8. Jouw rechten</h2>
              <p>Volgens de AVG heb jij het recht om:</p>
              <ul>
                <li>Je gegevens in te zien, te corrigeren of te verwijderen.</li>
                <li>Je toestemming voor verwerking in te trekken.</li>
                <li>Bezwaar te maken tegen het gebruik van je gegevens.</li>
              </ul>
              <p>Wil je gebruik maken van deze rechten? Neem contact op via <a href="mailto:info@humanperformancezeeland.nl" className="break-all">info@humanperformancezeeland.nl</a>.</p>
              
              <h2>9. Medisch voorbehoud & aansprakelijkheid</h2>
              <p>HPZ biedt coaching en training, geen medische behandeling. Ik ben geen arts, fysiotherapeut of medisch specialist.</p>
              <p>De informatie en adviezen die je ontvangt zijn bedoeld ter ondersteuning van je training en prestaties, maar vervangen nooit professioneel medisch advies.</p>
              <p>Bij (ernstige of aanhoudende) medische klachten dien je altijd een arts of specialist te raadplegen.</p>
              <p>Het is jouw verantwoordelijkheid om juiste en volledige informatie te geven over je gezondheid en belastbaarheid.</p>
              <p>Deelname aan trainingen en coaching gebeurt altijd op eigen risico.</p>
              <h3>Uitsluiting van aansprakelijkheid</h3>
              <p>HPZ is niet aansprakelijk voor blessures, schade of andere gevolgen die ontstaan:</p>
              <ul>
                <li>door het verkeerd of onvolledig uitvoeren van oefeningen en adviezen;</li>
                <li>door het verzwijgen van medische informatie of bestaande blessures;</li>
                <li>door omstandigheden die buiten mijn invloedssfeer vallen.</li>
              </ul>
              
              <h2>10. Wijzigingen</h2>
              <p>HPZ behoudt zich het recht voor deze privacyverklaring en disclaimer aan te passen. Controleer daarom regelmatig deze pagina voor de meest actuele versie.</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
