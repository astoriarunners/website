'use server';

export async function getMeetupRSSFeed(){
    const rssResponse= await fetch("https://www.meetup.com/astoriarunners/events/rss/");
    if (!rssResponse.ok)
        throw new Error("Error: " + rssResponse.status);
    const rssData = await rssResponse.text();
    return rssData;
}

export async function getDateFromMeetupPage(page: string){
    const pageResponse = await fetch(page);
    if (!pageResponse.ok)
        throw new Error("Error: " + pageResponse.status);
    const pageData = await pageResponse.text();
    return pageData;
}