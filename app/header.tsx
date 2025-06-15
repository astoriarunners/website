
import ARLogo from "/images/ar-logo.svg";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "@/app/components/mobileMenu/menu";

export default function Header(){
    return (
        <header>
            <div id="header-container">

                <nav className="desktop">
                    <Link className="logo" href="/">
                        <Image src={ARLogo} width={0} height={0} alt=""/>
                    </Link>
                    <Link href="/#schedule" className="schedule text">Schedule</Link>
                    <Link href="/#about-us" className="about-us text">About Us</Link>
                    <Link href="/#faqs" className="faqs text">FAQs</Link>
                </nav>

                <MobileMenu/>
                <span id="rsvp">
                    <span className="desktop"><b>Join our next run</b></span>
                    <a className="header-button" href="https://www.meetup.com/astoriarunners/" target="_blank">RSVP Now</a>
                </span>
            </div> {/* End Header Container */}
    </header>
    )
}