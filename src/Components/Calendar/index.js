import React, { useState } from 'react';
import { enGB } from 'date-fns/locale';
import { DatePickerCalendar } from 'react-nice-dates';
import 'react-nice-dates/build/style.css';
import './style.css';

//Calendário
//import { format } from 'date-fns';
//<p>The selected date is {date && format(date, 'dd MMM yyyy', { locale: enGB })}</p>

export default function Calendar() {
    
    //Variáveis 

    const [date, setDate] = useState()
    
    return (
        <div className="adminCalendar">
        <DatePickerCalendar date={date} onDateChange={setDate} locale={enGB} />
        </div>
    )
}