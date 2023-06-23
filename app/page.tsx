"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import letterOpen from "../public/letterOpen.png";
import letterClose from "../public/letterClose.png";
import "./page.css";

export default function Home() {
    const [letter, setLetter] = useState(false);
    const router = useRouter();

    function openLetter() {
        if (!letter) setLetter(true);
        else router.push("/letter");
    }

    return (
        <>
            <div className='letterContainer' onClick={openLetter}>
                <h1 className='letterHedder'>Mở lá thư</h1>
                <Image src={letter ? letterOpen : letterClose} alt='' />
            </div>
        </>
    );
}
