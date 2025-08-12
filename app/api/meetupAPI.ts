import { RunningEvent } from "../models/runningEvent";

export async function getMeetupEvents(): Promise<RunningEvent[]>{
    const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
    const meetupResponse= await fetch(`${baseUrl}/meetup/rss/`);
    if (!meetupResponse.ok)
        throw new Error("Error: " + meetupResponse.status);
    const meetupEvents: RunningEvent[] = await meetupResponse.json();
    return meetupEvents;
}
