'use client';

import { getDateFromMeetupEvent, getMeetupRSSFeed } from "@/app/meetupAPI";
import CalendarWrapper from "@/app/components/calendar/calendarWrapper";
import { parseFromString, Node } from "dom-parser";
import { useState, useEffect } from "react";
import { RunningEvent } from "@/app/models/runningEvent";

const EVENT_DATE_REGEX = new RegExp(/<time dateTime="([\dT:-]+)".+?>/);
const EVENT_TITLE_REGEX = new RegExp(/<title>(.+)\|(.+)<\/title>/);

export default function ARCalendar(){

    const [runningEvents, setRunningEvents] = useState<RunningEvent[]>([]);
    const [shouldFetchRunningEvents, setShouldFetchRunningEvents] = useState<boolean>(true);

    async function fetchRunningEvents() {
        try{
            const rssData = await getMeetupRSSFeed();
            const filteredRSSData = rssData.split("\n").slice(1).join("\n"); //Removing top RSS tag

            const domData = parseFromString(filteredRSSData);

            const items: Node[] = domData.getElementsByTagName("item");

            const events: RunningEvent[] = (await Promise.all(
                items.map(processRunningEvent)))
                .filter(ele => ele != null);
            setRunningEvents(events);
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

async function processRunningEvent(item: Node): Promise<RunningEvent|null>{
   
    const linkTag: Node = item.getElementsByTagName("guid")[0];
    const link: string|null = linkTag?.textContent;

    if (link == null)
        return null;
    const urlData: string[] = link.split("/");
    const eventId: number = +urlData[urlData.length-2];
    
    const pageText = await getDateFromMeetupEvent(eventId);

    const titleMatches = EVENT_TITLE_REGEX.exec(pageText);
    const title = titleMatches?.[1];
    if (title == null)
        return null;

    const atDelim: number | undefined = title.includes("@") ? title.indexOf("@") : undefined;
    const commaDelim: number | undefined = title.includes(",") ? title.indexOf(",") : undefined;
    let titleDelimiterIndex = title.length;
    if(atDelim && commaDelim)
        titleDelimiterIndex = Math.min(commaDelim, atDelim);
    else if(atDelim)
        titleDelimiterIndex = atDelim;
    else if(commaDelim)
        titleDelimiterIndex = commaDelim;

    const truncatedTitle = title.substring(0,titleDelimiterIndex).trim();
    
    const dateMatches = EVENT_DATE_REGEX.exec(pageText);
    const dateString = dateMatches?.[1];
    if (dateString == null)
        return null;
    const dateValue = new Date(Date.parse(dateString));
    
    return {
        title: truncatedTitle,
        link: link,
        date: dateValue
    }
}