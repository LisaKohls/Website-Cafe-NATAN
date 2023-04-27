import '../Styles/Reservierung.css'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function Reservierung(){
    const [startDate, setStartDate] = useState(new Date());
    return(<div className='Datepicker'>
            <label for="datePicker">Wähle ein Datum: </label>
            <DatePicker id='datePicker' selected={startDate} onChange={(date) => setStartDate(date)} />
            <label for='fname'>First name: </label>
            <input type='text' id='fname' name='fname'></input>
            </div>
    );
}

export default Reservierung