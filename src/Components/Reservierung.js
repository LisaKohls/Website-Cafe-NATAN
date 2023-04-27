import '../Styles/Reservierung.css'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function Reservierung(){
    const [startDate, setStartDate] = useState(new Date());
    return(<div className='Datepicker'>
            <label for='datePicker'>Wähle ein Datum: </label>
            <DatePicker id='datePicker' selected={startDate} onChange={(date) => setStartDate(date)} />
            <label for='name'>Name: </label>
            <input type='text' id='name' name='fname'></input>
            <label for='mail'>E-Mail: </label>
            <input type='text' id='mail' name='mail'></input>
            </div>
    );
}

export default Reservierung