import Layout from "./Layout.jsx";

import Home from "./Home";

import Diensten from "./Diensten";

import GratisStart from "./GratisStart";

import OverHPZ from "./OverHPZ";

import Contact from "./Contact";

import Privacy from "./Privacy";

import Berichten from "./Berichten";

import OnlineCoaching from "./OnlineCoaching";

import FAQ from "./FAQ";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Diensten: Diensten,
    
    GratisStart: GratisStart,
    
    OverHPZ: OverHPZ,
    
    Contact: Contact,
    
    Privacy: Privacy,
    
    Berichten: Berichten,
    
    OnlineCoaching: OnlineCoaching,
    
    FAQ: FAQ,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Diensten" element={<Diensten />} />
                
                <Route path="/GratisStart" element={<GratisStart />} />
                
                <Route path="/OverHPZ" element={<OverHPZ />} />
                
                <Route path="/Contact" element={<Contact />} />
                
                <Route path="/Privacy" element={<Privacy />} />
                
                <Route path="/Berichten" element={<Berichten />} />
                
                <Route path="/OnlineCoaching" element={<OnlineCoaching />} />
                
                <Route path="/FAQ" element={<FAQ />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}