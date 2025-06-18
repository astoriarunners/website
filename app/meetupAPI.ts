const baseUrl = "https://brave-cheese-79f7c9b3cb.strapiapp.com/api/meetup";

export async function getMeetupRSSFeed(){
    const rssResponse= await fetch(`${baseUrl}/rss/`);
    if (!rssResponse.ok)
        throw new Error("Error: " + rssResponse.status);
    const rssData = await rssResponse.text();
    return rssData;
}

export async function getDateFromMeetupEvent(eventId: number){
    const pageResponse = await fetch(`${baseUrl}/event/?eventId=${eventId}`);
    if (!pageResponse.ok)
        throw new Error("Error: " + pageResponse.status);
    const pageData = await pageResponse.text();
    return pageData;
}