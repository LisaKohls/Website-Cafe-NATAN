import React, { useState, useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import '../../styles/cookiebanner/CookieBanner.css';

function CookieBanner() {
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        const hasConsent = localStorage.getItem('cookieConsent');
        setShowBanner(!hasConsent);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowBanner(false);
    };

    return (
        showBanner && (
            <div>
                <CookieConsent
                    debug={true}
                    className="banner"
                    buttonStyle={{ color: '#FFFFFF', background: '#808770', borderRadius: '10px', fontSize: '18px' }}
                    buttonText="Verstanden!"
                    onAccept={handleAccept}
                >
                    Diese Seite nutzt Cookies. Schau dir unsere <a href="/privacy" className="linkbanner">Datenschutzerklärung</a> an für mehr Informationen
                </CookieConsent>
            </div>
        )
    );
}

export default CookieBanner;
