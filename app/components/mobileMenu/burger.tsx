'use client';

import Link from "next/link";
import { useState } from "react";


export default function Burger(){

    const [burger, setBurger] = useState(false);

    function toggleBurger(){
        setBurger(!burger);
    } 
    
    return <>
            <input className="burger-check" id="burger-check" type="checkbox" checked={burger} readOnly/>
            {/*TODO: below labels needs text*/}
            <label htmlFor="burger-check" className="burger"><span></span></label>
            <nav id="mobile-menu" className="mobile">
            <Link id="mbl-nav" href="/#schedule" onChange={toggleBurger}>Schedule</Link>
            <Link id="mbl-nav" href="/#about-us" onChange={toggleBurger}>About Us</Link>
            <Link id="mbl-nav" href="/#faqs" onChange={toggleBurger}>FAQs</Link>
        </nav>
    </>
}