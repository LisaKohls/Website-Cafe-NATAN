import '../../styles/forms/PopUpContent.css'
import emailjs from 'emailjs-com';
import React from "react";

/*
This component is displaying content for the pop up component. It enables applying for volunteer work.
 */
function Volunteer(props) {
    const SERVICE_ID = 'service_cbh0z4e';
    const TEMPLATE_ID = 'template_tjgodks';
    const PUBLIC_KEY = 'hYeEf2ZvtikQQT6Ti';

    function check(){

        //neccessary input parameters to make a volunteer request
        const nameInput = document.getElementById("name");
        let mailInput = document.getElementById("mail");
        const messageInput = document.getElementById("message");
        const checkPrivacy = document.getElementById('privacy')

        const name = nameInput.value;
        let mail = mailInput.value;
        const message = messageInput.value;
        const privacy = checkPrivacy.checked;

        const isValidMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail);

        if (name === "") {
            nameInput.style.borderColor = 'red'
        }else{
            nameInput.style.borderColor = 'black'
        }

        if (mail === ""){
            mailInput.style.borderColor = 'red'
        }else if(!isValidMail){
            mailInput.style.borderColor = 'red'
            mailInput.value = ''
            mailInput.setAttribute('placeholder', 'Gebe eine korrekte E-Mail an');
        } else{
            mailInput.style.borderColor = 'black'
            mailInput.removeAttribute('placeholder')
        }


        if(name !== '' && mail !== '' && privacy){
            console.log(`name ${name}, mail ${mail}, message ${message}`)
            props.setTrigger(false);
            emailjs.send(SERVICE_ID,TEMPLATE_ID,{
                name: name,
                mail: mail,
                message: message,
            },PUBLIC_KEY ).then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );
        }




    }
    return (
        <div>
        <div className='formular volunteer' >
            <>
                <h2>Werde Volunteer</h2>
            </>
            <>
                <label>Vor- und Nachname:*</label>
                <input type="text" id="name" name="name" required></input>
            </>
            <>
                <label>Mail:*</label>
                <input type="email" id="mail" name="mail" placeholder=" " required></input>
            </>
            <>
                <label>Deine Nachricht an uns:</label>
                <textarea id="message" className="textArea"></textarea>
            </>
            <>
                <p className='mandatory'>* Pflichtfeld</p>
            </>
        </div>
            <div className='checkbox'>
                <input type="checkbox" id="privacy" name="privacy"/>
                <label htmlFor="privacy" id="privacyLabel"> Ich habe die <a href="/privacy" className='linkBlack' target="_blank">Datenschutzerklärung</a> gelesen und verstanden </label>
            </div>
            <>
                <button className='submit' onClick={check}>Abschicken</button>
            </>
        </div>
    )
}

export default Volunteer
