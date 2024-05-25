import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export function Calender() {
  const [value, setValue] = React.useState();

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{
        calendarWeekNumberHeaderText: '#',
        calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
      }}
    >
      <DateCalendar
        displayWeekNumber
        showDaysOutsideCurrentMonth
        fixedWeekNumber={6}
        value={value}
        onChange={handleChange}
      />
    </LocalizationProvider>
  );
}
