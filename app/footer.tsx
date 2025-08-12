import Link from "next/link";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer-space">&nbsp;</div>
            <footer>
                <span>
                    <a href="https://www.nyrr.org/getinvolved/club/astoria-runners" title="NYRR">
                        <FontAwesomeIcon icon={faRunning} size="2x"/>
                    </a>
                    <a href="https://www.instagram.com/astoria_runners/" title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} size="2x"/>
                    </a>
                </span>
                <span id="copyright">&copy;Astoria Runners {year}</span>
                <Link id="back-top" href="/#top">
                    Back to Top
                </Link>
                <div className="footer-links"/>
            </footer>
        </>
    )
}