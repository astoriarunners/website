'use client';

import Link from "next/link";
import { useRef } from "react";


export default function Burger(){

    console.log("Burger load");
    const burgerRef = useRef(null);

    function toggleBurger(){
        if (!burgerRef.current)
            return;
        const burger = burgerRef.current as HTMLInputElement;
        burger.checked = false;
    } 
    
    return <>
            <input className="burger-check" id="burger-check" type="checkbox" ref={burgerRef} readOnly title="?"/>
            {/*TODO: below labels needs text*/}
            <label htmlFor="burger-check" className="burger"><span></span></label>
            <nav id="mobile-menu" className="mobile">
                <Link id="mbl-nav" href="/#schedule" onClick={toggleBurger}>Schedule</Link>
                <Link id="mbl-nav" href="/#about-us" onClick={toggleBurger}>About Us</Link>
                <Link id="mbl-nav" href="/#faqs" onClick={toggleBurger}>FAQs</Link>
            </nav>
    </>
}