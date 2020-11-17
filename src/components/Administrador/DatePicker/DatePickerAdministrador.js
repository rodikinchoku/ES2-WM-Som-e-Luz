import React, { useState } from 'react';
import { enGB } from 'date-fns/locale';
import { DatePicker } from 'react-nice-dates';


const DatePickerAdministrador = (data) => {
     //Variáveis 

    const [date, setDate] = useState();

    return (
        <DatePicker date={date} onDateChange={setDate} locale={enGB}>
            {({ inputProps, focused }) => (<input className={'input' + (focused ? ' -focused' : '')}
            {...inputProps} {...data = inputProps} /> 
            )}
        </DatePicker>

    );
}

export default DatePickerAdministrador;