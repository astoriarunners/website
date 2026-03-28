import { EventArticle } from "@/app/models/eventArticle";

export async function getSpecialEvent(): Promise<EventArticle|null>{
    const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
    try{
        const eventsResponse = await fetch(`${baseUrl}/special-events`);
        if (!eventsResponse.ok) {
            console.debug("No special event found");
            return null;
        }
        const eventResponse = await eventsResponse.json();
        const eventData: EventArticle[] = eventResponse["data"];
        return eventData[0];
    } catch(err) {
        console.debug("No special event found: " + err);
        return null;
    }
}

