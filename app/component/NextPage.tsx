"use client";

import Image from "next/image";
import nextPage from "../../public/nextPage.svg";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

interface NextPageProps {
    href: string;
    onClick?: () => void;
}

export default function NextPage(props: NextPageProps) {
    const router = useRouter();
    async function divOnClick() {
        if (props.onClick != null) await props.onClick();
        router.push(props.href);
    }
    return (
        <div className='absolute bottom-0 right-0 px-10 py-5' onClick={divOnClick}>
            <Image src={nextPage} alt={"Next Page"} className='w-32' />
        </div>
    );
}
