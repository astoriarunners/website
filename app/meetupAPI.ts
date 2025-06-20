import { RunningEvent } from "./models/runningEvent";

const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL ?? "https://brave-cheese-79f7c9b3cb.strapiapp.com/api";

export async function getMeetupEvents(): Promise<RunningEvent[]>{
    const meetupResponse= await fetch(`${baseUrl}/meetup/rss/`);
    if (!meetupResponse.ok)
        throw new Error("Error: " + meetupResponse.status);
    const meetupEvents: RunningEvent[] = await meetupResponse.json();
    return meetupEvents;
}
