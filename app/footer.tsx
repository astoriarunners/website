import Link from "next/link";

export default function Footer(){
    const year = new Date().getFullYear();
    return (
        <>
            <div className="footer-space">&nbsp;</div>
            <footer>
                <span id="copyright">&copy;Astoria Runners {year}</span>
                <Link id="back-top" href="/#top">
                    Back to Top
                </Link>
                <div className="footer-links"/>
            </footer>
        </>
    )
}