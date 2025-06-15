import ARLogo from "/images/ar-logo.svg";
import Image from "next/image";
import Link from "next/link";
import Burger from "@/app/components/mobileMenu/burger";

export default function MobileMenu(){
    return <>
        <Burger/>
        <Link className="logo mobile" href="/">
            <Image src={ARLogo} width={0} height={0} alt=""/>
        </Link>
    </>
}