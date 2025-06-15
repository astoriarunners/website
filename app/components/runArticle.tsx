import Image, { StaticImageData } from "next/image";

interface RunArticleProps{
    title: string,
    description: string,
    image: StaticImageData
    imageThumb: StaticImageData

}

export function RunArticle(props: RunArticleProps){
    return <>
        <div className="half">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a className="img-modal" rel="tm" href={props.image.src} title="">
                <Image className="maps" src={props.imageThumb} alt="" width={328} height={0}/>
            </a>
        </div>
    </>
}