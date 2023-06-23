"use client";

import "./style.css";
import { supabase } from "../lib/supabase";
import { useEffect, useRef, useState } from "react";
import NextPage from "../component/NextPage";
import Imageholder from "../component/Imageholder";
import { useEventListener } from "usehooks-ts";

export default function Gallery() {
    const [imageUrl, setImageUrl] = useState<string[]>([]);
    const imgContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        async function getImageUrl() {
            const imageUrl = [];
            const { data, error } = await supabase.storage.from("image").list("", {
                sortBy: { column: "name", order: "asc" },
            });
            if (error) return;
            if (data) {
                for (const image of data) {
                    const { publicUrl } = supabase.storage.from("image").getPublicUrl(image.name).data;
                    imageUrl.push(publicUrl);
                }
            }
            setImageUrl(imageUrl);
        }
        getImageUrl();
    }, []);
    useEventListener("wheel", (e) => {
        const imgContainer = imgContainerRef.current;
        if (!imgContainer) return;
        imgContainer.scrollLeft += e.deltaY * 2;
    });
    return (
        <>
            <div className='imageContainer' ref={imgContainerRef}>
                {imageUrl.map((url, index) => (
                    <Imageholder key={index} src={url} />
                    // <Image src={url} alt='' fill={true} className='object-cover' />
                ))}
            </div>
            <NextPage href='/message' />
        </>
    );
}
