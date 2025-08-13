import Image, { StaticImageData } from "next/image";
import useFancyBox from "@/app/hooks/fancybox";

interface RunArticleProps{
    title: string,
    description: string,
    image: StaticImageData
    imageThumb: StaticImageData

}

export function RunArticle(props: RunArticleProps){

    const [fancyBoxRef] = useFancyBox({
        fadeEffect: true
    });

    return <>
        <div className="half" ref={fancyBoxRef}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <a className="img-modal" rel="tm" data-src={props.image.src} title="" data-fancybox>
                <Image className="maps" src={props.imageThumb} alt="" width={328} height={0}/>
            </a>
        </div>
    </>
}