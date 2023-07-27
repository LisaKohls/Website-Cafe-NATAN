import React from 'react'
import CookieConsent from "react-cookie-consent";
import '../../styles/cookiebanner/CookieBanner.css'

function CookieBanner(){
    return( <div>
        <CookieConsent debug={true}
                       className='banner'
                       buttonStyle={{color: '#FFFFFF', background: '#808770', borderRadius:'10px', fontSize:'18px'}}
                       buttonText='Verstanden!'>
                        Diese Seite nutzt Cookies. Schau dir unsere <a href='/privacy' className='linkbanner'>Datenschutzerklärung</a> an für mehr Informationen</CookieConsent>
    </div>)
}

export default CookieBanner