'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventSourceInput, FormatterInput } from '@fullcalendar/core/index.js';
import "@/styles/fc.css";

interface CalendarProps{
  runningEvents: RunningEvent[]
}

interface RunningEvent{
  title: string
  link: string
  date: Date
}

export default function CalendarClient(props: CalendarProps) {

  const calendarEvents: EventSourceInput = props.runningEvents.map( event => {
      return {
        title: event.title,
        start: event.date.toISOString(),
        url: event.link
    }
  });

    const eventTimeFormat: FormatterInput = {
      hour: '2-digit',
      minute: '2-digit'
    };

  return (
    <FullCalendar
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      events={calendarEvents}
      eventTimeFormat={eventTimeFormat}
    />
  )
}