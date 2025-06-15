'use server';

import { getDateFromMeetupPage, getMeetupRSSFeed } from "@/app/meetupAPI";
import Calendar from "@/app/components/calendar/calendarClient";
import { parseFromString, Node } from "dom-parser";
import { RunningEvent } from "@/app/models/runningEvent";

const EVENT_DATE_REGEX = new RegExp(/<time dateTime="([\dT:-]+)".+?>/);
const EVENT_TITLE_REGEX = new RegExp(/<title>(.+)\|(.+)<\/title>/);

export async function CalendarData(){
    const rssData = await getMeetupRSSFeed();
    const filteredRSSData = rssData.split("\n").slice(1).join("\n"); //Removing top RSS tag

    const domData = parseFromString(filteredRSSData);

    const items: Node[] = domData.getElementsByTagName("item");

    const runningEvents: RunningEvent[] = (await Promise.all(
        items.map(processRunningEvent)))
        .filter(ele => ele != null);

    return <Calendar runningEvents={runningEvents}>
    </Calendar>

}

async function processRunningEvent(item: Node): Promise<RunningEvent|null>{
   
    const linkTag: Node = item.getElementsByTagName("guid")[0];
    const link: string|null = linkTag?.textContent;
    
    const pageText = await getDateFromMeetupPage(link);

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