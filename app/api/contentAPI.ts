import { MonthArticle } from "../models/article";


export async function getMonthContent(){
    const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL ?? "https://brave-cheese-79f7c9b3cb.strapiapp.com/api";
    console.log(process.env.NEXT_PUBLIC_ADMIN_API_URL);
    const rawResponse= await fetch(`${baseUrl}/month-articles/`);
    if (!rawResponse.ok)
        throw new Error("Error: " + rawResponse.status);
    const resData = await rawResponse.json();
    //TODO: Fetch only needed articles
    const blurb = resData["data"].filter((ele: MonthArticle) => ele.id && ele.month === "June")[0];
    return blurb;
}