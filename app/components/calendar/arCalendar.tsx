'use client';

import { getMeetupEvents } from "@/app/api/meetupAPI";
import CalendarWrapper from "@/app/components/calendar/calendarWrapper";
import { useState, useEffect } from "react";
import { RunningEvent } from "@/app/models/runningEvent";

export default function ARCalendar(){

    const [runningEvents, setRunningEvents] = useState<RunningEvent[]>([]);
    const [shouldFetchRunningEvents, setShouldFetchRunningEvents] = useState<boolean>(true);

    async function fetchRunningEvents() {
        try{
            const meetupResponse = await getMeetupEvents();
            setRunningEvents(meetupResponse);
        } catch(e){
            setShouldFetchRunningEvents(false);
        }
    }

    useEffect( () => {
        if(shouldFetchRunningEvents && runningEvents.length === 0)
            fetchRunningEvents();
    });

    return <CalendarWrapper runningEvents={runningEvents}>
    </CalendarWrapper>

}