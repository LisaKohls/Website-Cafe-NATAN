import '../../styles/forms/PopUpContent.css'
import React, {useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import de from 'date-fns/locale/de';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-time-picker/dist/TimePicker.css';
import Map from "../googlemaps/Map";
import emailjs from "emailjs-com";


function Reservation() {
    const SERVICE_ID = 'service_cbh0z4e';
    const TEMPLATE_ID = 'template_9r15prc';
    const PUBLIC_KEY = 'hYeEf2ZvtikQQT6Ti';


    const [startDate, setStartDate] = useState(new Date());
    const [submit, setSubmit] = useState(false)
    registerLocale("de", de)
    const [nameRequest, setName] = useState('')


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
        const privacy = checkPrivacy.checked;

        const isValidMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(mail);
        const selectedTime = parseInt(time.split(":")[0]);

        let nameValue = true;
        let timeValue = true;
        let dateValue = true;
        let mailValue = true;
        let countValue = true;
        let privacyValue = true;

        if (date === "") {
            dateInput.style.borderColor = 'red';
            dateValue = false;
        } else {
            dateInput.style.borderColor = 'black';
            dateValue = true;
        }

        if (time === "") {
            timeInput.style.borderColor = 'red';
        }else if (selectedTime < 10 && selectedTime >= 1) {
            alert("Bitte wähle eine Uhrzeit die den Öffnungszeiten entspricht");
            timeValue = false
        } else {
            timeInput.style.borderColor = 'black';
        }

        if (name === "") {
            nameInput.style.borderColor = 'red';
            nameValue = false;
        } else {
            nameInput.style.borderColor = 'black';
            nameValue = true;
            setName(name)
        }

        if (count === "" || count > 20) {
            countInput.style.borderColor = 'red';
            countValue = false;
        } else {
            countInput.style.borderColor = 'black';
            countValue = true;
        }

        if (mail === "") {
            mailInput.style.borderColor = 'red';
            mailValue = false
        } else if (!isValidMail) {
            mailInput.style.borderColor = 'red';
            mailValue = false;
            mailInput.value = '';
            mailInput.setAttribute('placeholder', 'Gebe eine korrekte E-Mail an');
        } else {
            mailValue = true
            mailInput.style.borderColor = 'black';
            mailInput.removeAttribute('placeholder');
        }
        console.log(privacy)
        if(!privacy){
            checkPrivacy.style.borderColor = 'red'

        }else{
            checkPrivacy.style.borderColor = 'black'
        }



        if(dateValue && timeValue && nameValue && countValue && mailValue && privacyValue){

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
            );
        }

    }

    const makeRequest = <div className='container'>
        <Map/>
        <div>
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
    </div>

    const isSubmitted = <div className='sentForm'>
        <h3>Danke {nameRequest},</h3>
        <p>Deine Anfrage wurde erfolgreich
            abgeschickt und wird bearbeitet, wir schicken dir eine Mail zu um die Reservierung zu bestätigen</p>

    </div>

    return ( submit ? isSubmitted:makeRequest);


}

export default Reservation