import { RunningEvent } from "./models/runningEvent";

const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;

export async function getMeetupEvents(): Promise<RunningEvent[]>{
    const meetupResponse= await fetch(`${baseUrl}/meetup/rss/`);
    if (!meetupResponse.ok)
        throw new Error("Error: " + meetupResponse.status);
    const meetupEvents: RunningEvent[] = await meetupResponse.json();
    return meetupEvents;
}
