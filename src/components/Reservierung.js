import '../styles/PopUpContent.css'
import React, {useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import de from 'date-fns/locale/de';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-time-picker/dist/TimePicker.css';
import Map from "./Map";

function Reservierung(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [submit, setSubmit] = useState(false)
    registerLocale("de", de)

    function check(){
        const date = document.getElementById("datePicker").value
        const time = document.getElementById("time").value;
        const name = document.getElementById("name").value;
        const count = document.getElementById("personen").value;
        const mail = document.getElementById("mail").value;

        if(date === ' ' || time === '' || name === '' || count === '' || mail === ''){
            alert('Bitte fülle alles vollständig aus')
        }else{
            setSubmit(true)

        }

    }
    const gotIt = () => {
        props.setTrigger(false)
    }

    const makeRequest = <div className='container'>
        <Map/>
        <div className='formular'>
        <>
            <label>Wähle ein Datum: </label>
            <DatePicker id='datePicker' locale="de" selected={startDate} onChange={(date) => setStartDate(date) }
                        dateFormat='dd MMMM yy' required/>
        </>
        <>
            <label>Deine Uhrzeit: </label>
            <input type="time" id="time" name="time" min="10:00" max="20:00" required></input>
        </>
        <>
            <label >Name: </label>
            <input type='text' id='name' name='fname' required></input>
        </>
        <>
            <label> Anzahl Personen</label>
            <input type='number' id='personen' name='personen' required></input>
        </>
        <>
            <label>E-Mail: </label>
            <input type='text' id='mail' name='mail' required></input>
        </>
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