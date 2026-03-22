import { EventArticle } from "@/app/models/eventArticle";

export async function getSpecialEvent(): Promise<EventArticle>{
    const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
    // const eventArticle: EventArticle = {
    //     eventName: "Brewery Run",
    //     eventDescription: "Join us at Focal Point Brewery on 3/21",
    //     id: 0
    // };
    // return await Promise.resolve(eventArticle);
    const eventsResponse = await fetch(`${baseUrl}/special-events`);
    if (!eventsResponse.ok)
        throw new Error("Error: " + eventsResponse.status);
    const eventResponse = await eventsResponse.json();
    const eventData: EventArticle[] = eventResponse["data"];
    return eventData[0];
}
