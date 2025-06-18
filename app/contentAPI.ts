import { MonthArticle } from "./models/article";

const baseUrl = "https://brave-cheese-79f7c9b3cb.strapiapp.com/api";

export async function getMonthContent(){
    const rawResponse= await fetch(`${baseUrl}/month-articles/`);
    if (!rawResponse.ok)
        throw new Error("Error: " + rawResponse.status);
    const resData = await rawResponse.json();
    //TODO: Fetch only needed articles
    const blurb = resData["data"].filter((ele: MonthArticle) => ele.id && ele.month === "June")[0];
    return blurb;
}