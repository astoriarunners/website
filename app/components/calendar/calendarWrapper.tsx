'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { EventSourceInput, FormatterInput } from '@fullcalendar/core/index.js';
import "@/styles/fc.css";
import { RunningEvent } from '@/app/models/runningEvent';

interface CalendarProps{
  runningEvents: RunningEvent[]
}

export default function CalendarWrapper(props: CalendarProps) {

  const calendarEvents: EventSourceInput = props.runningEvents.map( event => {
      return {
        title: event.title,
        start: new Date(Date.parse(event.dateStr)).toISOString(),
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