import '../Styles/PopUpContent.css'
import React, {useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import de from 'date-fns/locale/de';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';

function Reservierung(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00')
    registerLocale("de", de)

    function check(){
        var date = document.getElementById("datePicker").value
        var time = document.getElementById("time").value
        var name = document.getElementById("name").value
        var count = document.getElementById("personen").value
        var mail = document.getElementById("mail").value

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