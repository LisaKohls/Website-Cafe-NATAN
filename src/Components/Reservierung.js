import '../Styles/Reservierung.css'
import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import de from 'date-fns/locale/de';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';

function Reservierung(){
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00')
    registerLocale("de", de)
    return(<div className='Datepicker'>
            <label for='datePicker' >Wähle ein Datum: </label>
            <DatePicker id='datePicker' locale="de" selected={startDate} onChange={(date) => setStartDate(date)} dateFormat='dd MMMM yy'/>
            <label for='timepicker'>Uhrzeit: </label>
            <TimePicker id='timepicker' onChange={onChange} value={value} />
            <label for='name'>Name: </label>
            <input type='text' id='name' name='fname'></input>
            <label for='personen'> Anzahl Personen</label>
            <input type='number' id='personen' name='personen'></input>
            <label for='mail'>E-Mail: </label>
            <input type='text' id='mail' name='mail'></input>
            <button className='submit'>Abschicken</button>
            </div>
    );
}

export default Reservierung