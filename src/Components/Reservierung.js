import '../Styles/PopUpContent.css'
import React, {useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import de from 'date-fns/locale/de';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import 'react-time-picker/dist/TimePicker.css';

function Reservierung(props) {
    const [startDate, setStartDate] = useState(new Date());
    registerLocale("de", de)

    function check(){
        const date = document.getElementById("datePicker").value
        const time = document.getElementById("time").value;
        const name = document.getElementById("name").value;
        const count = document.getElementById("personen").value;
        const mail = document.getElementById("mail").value;

        if(date === ' ' || time === '' || name === '' || count === ''){
            alert('Bitte fülle alles vollständig aus')
        }else{
            alert('Wir haben das Natan Team mit deiner Anfrage kontaktiert und melden uns dann bei dir')
            console.log(`name ${name}, mail ${mail}, time ${time}`)
            props.setTrigger(false);
        }

    }
    return (
        <div className='formular'>
            <div>
                <label>Wähle ein Datum: </label>
                <DatePicker id='datePicker' locale="de" selected={startDate} onChange={(date) => setStartDate(date) }
                            dateFormat='dd MMMM yy' required/>
            </div>
            <div>
                <label>Deine Uhrzeit: </label>
                <input type="time" id="time" name="time" min="10:00" max="20:00" required></input>
            </div>
            <div>
                <label >Name: </label>
                <input type='text' id='name' name='fname' required></input>
            </div>
            <div>
                <label> Anzahl Personen</label>
                <input type='number' id='personen' name='personen' required></input>
            </div>
            <div>
                <label>E-Mail: </label>
                <input type='text' id='mail' name='mail' required></input>
            </div>
                <button className='submit' onClick={check}>Abschicken</button>
        </div>
    );
}

export default Reservierung