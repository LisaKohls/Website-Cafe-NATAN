import '../../styles/forms/PopUpContent.css'
import React, {useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import de from 'date-fns/locale/de';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-time-picker/dist/TimePicker.css';
import Map from "../Map";
import emailjs from "emailjs-com";


function Reservierung(props) {
    const SERVICE_ID = 'service_xe2vwog';
    const TEMPLATE_ID = 'template_tjgodks';
    const PUBLIC_KEY = 'hYeEf2ZvtikQQT6Ti';


    const [startDate, setStartDate] = useState(new Date());
    const [submit, setSubmit] = useState(false)
    registerLocale("de", de)


    function check(){
        const dateInput = document.getElementById("datePicker")
        const timeInput = document.getElementById("time");
        const nameInput = document.getElementById("name");
        const countInput = document.getElementById("personen");
        const mailInput = document.getElementById("mail");
        const checkPrivacy = document.getElementById('privacy')

        const date = dateInput.value;
        const time = timeInput.value;
        const name = nameInput.value;
        const count = countInput.value;
        const mail = mailInput.value;
        const privacy = checkPrivacy.value;

        const isValidMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail);
        const selectedTIme = parseInt(time.split(":")[0]);

        if (date === "") {
            dateInput.style.borderColor = 'red';
        } else {
            dateInput.style.borderColor = 'black';
        }

        if (time === "") {
            timeInput.style.borderColor = 'red';
        }else if (selectedTIme < 10 || selectedTIme >= 20) {
            alert("Bitte wähle eine Uhrzeit zwischen 10:00 und 20:00 Uhr.");
        } else {
            timeInput.style.borderColor = 'black';
        }

        if (name === "") {
            nameInput.style.borderColor = 'red';
        } else {
            nameInput.style.borderColor = 'black';
        }

        if (count === "") {
            countInput.style.borderColor = 'red';
        } else {
            countInput.style.borderColor = 'black';
        }

        if (mail === "") {
            mailInput.style.borderColor = 'red';
        } else if (!isValidMail) {
            mailInput.style.borderColor = 'red';
            mailInput.value = '';
            mailInput.setAttribute('placeholder', 'Gebe eine korrekte E-Mail an');
        } else {
            mailInput.style.borderColor = 'black';
            mailInput.removeAttribute('placeholder');
        }

        if(privacy!=='isChecked'){
            checkPrivacy.style.borderColor = 'red'
        }else{
            checkPrivacy.style.borderColor = 'black'
        }



        if(date !== '' && time !== '' && name !== '' && count !== '' && mail !== ''){
            console.log('Input correct')
            /*
            setSubmit(true)
            emailjs.send(SERVICE_ID,TEMPLATE_ID,{
                date: date,
                time: time,
                name: name,
                count: count,
                mail: mail
            },PUBLIC_KEY ).then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                },
                function (error) {
                    console.log("FAILED...", error);
                }
            );*/
        }

    }
    const gotIt = () => {
        props.setTrigger(false)
    }

    const makeRequest = <div className='container'>
        <Map/>
        <div className='formular'>
            <>
                <label>Wähle ein Datum:* </label>
                <DatePicker
                    id='datePicker'
                    locale="de"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat='dd MMMM yy'
                    required
                    minDate={new Date()}
                />
            </>
            <>
                <label>Deine Uhrzeit:* </label>
                <input type="time" id="time" name="time" min="10:00" max="20:00" required />
            </>
            <>
                <label>Name:* </label>
                <input type='text' id='name' name='fname' required></input>
            </>
            <>
                <label>Anzahl Personen:*</label>
                <input type='number' id='personen' name='personen' required></input>
            </>
            <>
                <label>E-Mail:* </label>
                <input type='email' id='mail' name='mail' required></input>
            </>
            <div className='checkbox'>
                <input type="checkbox" id="privacy" name="privacy"/>
                <label htmlFor="privacy" id="privacyLabel">Ich habe die <a href="/privacy" className='linkBlack' target="_blank">Datenschutzerklärung</a> gelesen und verstanden </label>
            </div>
            <button className='submit' onClick={check}>Abschicken</button>
        </div>
    </div>

    const isSubmitted = <div className='sentForm'>
        <label>Deine Anfrage wurde erfolgreich
            abgeschickt und wird bearbeitet </label>
        <button className='submit' onClick={gotIt}>Got it</button>
    </div>

    return ( submit ? isSubmitted:makeRequest);


}

export default Reservierung