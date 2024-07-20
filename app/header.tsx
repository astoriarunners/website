'use client';

import { useState } from "react";
import ARLogo from "../images/ar-logo.svg"
import Image from "next/image";

export default function Header(){

    const [burger, setBurger] = useState(false);

    function toggleBurger(){
        setBurger(!burger);
    } 

    return (
        <header>
            <div id="header-container">

                <nav className="desktop">
                    <a className="logo" href="/">
                        <Image src={ARLogo} width={0} height={0} alt=""/>
                    </a>
                    <a href="/#schedule" className="schedule text">Schedule</a>
                    <a href="/#about-us" className="about-us text">About Us</a>
                    <a href="/#faqs" className="faqs text">FAQs</a>
                </nav>

                <input className="burger-check" id="burger-check" type="checkbox" checked={burger} readOnly/>
                <label htmlFor="burger-check" className="burger"><span></span></label>
                    <nav id="mobile-menu" className="mobile">
                    <a id="mbl-nav" href="/#schedule" onChange={toggleBurger}>Schedule</a>
                    <a id="mbl-nav" href="/#about-us" onChange={toggleBurger}>About Us</a>
                    <a id="mbl-nav" href="/#faqs" onChange={toggleBurger}>FAQs</a>
                </nav>

                <a className="logo mobile" href="/">
                    <Image src="/images/ar-logo.svg" width={0} height={0} alt=""/>
                </a>

                <span id="rsvp">
                    <span className="desktop"><b>Join our next run</b></span>
                    <a className="header-button" href="https://www.meetup.com/astoriarunners/" target="_blank">RSVP Now</a>
                </span>
            </div> {/* End Header Container */}
    </header>
    )
}