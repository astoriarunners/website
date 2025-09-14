import Link from "next/link";
import Image from "next/image";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NYRR, Strava } from "@/images";

export default function Footer(){
    return (
        <>
            <div className="footer-space">&nbsp;</div>
            <footer>
                <span>
                    <Link className="logo" href="https://www.strava.com/clubs/198723">
                        <Image src={Strava} width={0} height={0} alt="" style={{"width": "50px"}}/>
                    </Link>
                    <Link className="logo" href="https://www.nyrr.org/getinvolved/club/astoria-runners">
                        <Image src={NYRR} width={0} height={0} alt="" style={{"width": "50px"}}/>
                    </Link>
                    <Link href="https://www.instagram.com/astoria_runners/">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </Link>
                </span>
                <span id="copyright">&copy;Astoria Runners</span>
                <Link id="back-top" href="/#top">
                    Back to Top
                </Link>
                <div className="footer-links"/>
            </footer>
        </>
    )
}