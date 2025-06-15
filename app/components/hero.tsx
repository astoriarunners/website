import Image from "next/image";
import ARLogoWhite from "/images/ar-logo-white.svg";
import HomepageHero from "/images/homepage-hero.jpg";
interface heroProps{
    height?: number;
}

export default function Hero(props: heroProps){
    return (
        <div className="hero" style={{ backgroundImage: `url(${HomepageHero.src})`, backgroundPosition: "middle", height: props.height}}>
            <Image src={ARLogoWhite} alt="Astoria Runners Logo" width={0} height={0}/>
            <span><b>Come run and hang with the happiest run club in NYC.</b></span>
            <span>Our group runs, rides bikes, reads books, and generally has a good time.</span>
        </div>
    )
}