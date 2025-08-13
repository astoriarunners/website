import { MonthArticle } from "@/app/models/monthArticle";


export async function getMonthContent(): Promise<MonthArticle|null>{
    const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API_URL;
    const today = new Date();
    const monthIndex = today.getMonth() + 1; // Months in JS are 0 indexed for some reason

    const rawResponse= await fetch(`${baseUrl}/month-articles/?filters[monthIndex][$eq]=${monthIndex}`);
    if (!rawResponse.ok)
        throw new Error("Error: " + rawResponse.status);
    const resData = await rawResponse.json();

    const data: MonthArticle[] = resData["data"];
    if (!data)
        return null;

    return data[0];
}