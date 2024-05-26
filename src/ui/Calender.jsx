// import * as React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { TextField } from '@mui/material';
import Badge from '@mui/material/Badge';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import DoneIcon from '@mui/icons-material/Done';
import { DatePickerToolbar } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import FormModal from './FormModal';

function CustomToolbar(props) {
  return (
    <Box
      // Pass the className to the root element to get correct layout
      className={props.className}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#2d3250',
      }}
    >
      <DatePickerToolbar {...props} />
      <CreateIcon fontSize="large" sx={{ m: 5, color: '#2d3250' }} />
    </Box>
  );
}

export function Calender() {
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  /**
   * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
   * ⚠️ No IE11 support
   */
  function fakeFetch(date, { signal }) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        const daysInMonth = date.daysInMonth();
        const daysToHighlight = [1, 2, 3, 4, 5].map(() =>
          getRandomNumber(1, daysInMonth)
        );

        resolve({ daysToHighlight });
      }, 500);

      signal.onabort = () => {
        clearTimeout(timeout);
        reject(new DOMException('aborted', 'AbortError'));
      };
    });
  }

  const initialValue = dayjs('2022-04-17');

  function ServerDay(props) {
    const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

    const isSelected =
      !props.outsideCurrentMonth &&
      highlightedDays.indexOf(props.day.date()) >= 0;

    return (
      <Badge
        key={props.day.toString()}
        overlap="circular"
        badgeContent={isSelected ? <DoneIcon /> : undefined}
      >
        <PickersDay
          {...other}
          outsideCurrentMonth={outsideCurrentMonth}
          day={day}
        />
      </Badge>
    );
  }

  const requestAbortController = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 15]);

  const fetchHighlightedDays = (date) => {
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal,
    })
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date);
  };

  const handleClick = (e) => {
    const date = new Date();
    const eventDate = date.toISOString().split('T')[0];
    console.log(eventDate);
    setOpen(true);
    <FormModal open={open} />;
  };

  return (
    <LocalizationProvider
      dateAdapter={AdapterDayjs}
      localeText={{
        calendarWeekNumberHeaderText: '#',
        calendarWeekNumberText: (weekNumber) => `${weekNumber}.`,
      }}
    >
      <StaticDatePicker
        orientation="portrait"
        onChange={handleClick}
        displayWeekNumber
        showDaysOutsideCurrentMonth
        fixedWeekNumber={6}
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={handleMonthChange}
        renderLoading={() => <DayCalendarSkeleton />}
        slots={{
          day: ServerDay,
          toolbar: CustomToolbar,
        }}
        slotProps={{
          day: {
            highlightedDays,
          },
        }}
      />
    </LocalizationProvider>
  );
}
