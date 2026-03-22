'use client';

import { getMeetupEvents } from "@/app/api/meetupAPI";
import CalendarWrapper from "@/app/components/calendar/calendarWrapper";
import { useState, useEffect } from "react";
import { RunningArticle } from "@/app/models/runningArticle";

export default function ARCalendar(){

    const [runningEvents, setRunningEvents] = useState<RunningArticle[]>([]);
    const [shouldFetchRunningEvents, setShouldFetchRunningEvents] = useState<boolean>(true);

    async function fetchRunningEvents() {
        try{
            const meetupResponse = await getMeetupEvents();
            setRunningEvents(meetupResponse);
        } catch(e){
            console.log(e);
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