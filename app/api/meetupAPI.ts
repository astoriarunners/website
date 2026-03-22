import { RunningArticle } from "@/app/models/runningArticle";

export async function getMeetupEvents(): Promise<RunningArticle[]>{
    const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
    const meetupResponse= await fetch(`${baseUrl}/meetup/rss/`);
    if (!meetupResponse.ok)
        throw new Error("Error: " + meetupResponse.status);
    const meetupEvents: RunningArticle[] = await meetupResponse.json();
    return meetupEvents;
}
