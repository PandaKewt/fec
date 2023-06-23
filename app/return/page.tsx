"use client";

import { useRef } from "react";
// import Image from "next/image";
// import quinn from "../../public/quinn.png";

import NextPage from "../component/NextPage";
import { supabase } from "../lib/supabase";
import "./style.css";

export default function Return() {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <>
            <div className='flex flex-col justify-center items-center h-full w-full'>
                <div className='grid grid-cols-2 grid-rows-2'>
                    <h2 className='text-6xl font-bold col-start-1 row-start-1 -rotate-12'>
                        Phản ứng
                    </h2>
                    <h2 className='text-6xl font-bold col-start-2 row-start-2 rotate-6 -translate-x-6'>
                        Của Tao
                    </h2>
                </div>
                <input
                    type='text'
                    className='w-96 h-10 rounded-xl bg-gray-700 text-white mt-10 p-4'
                    placeholder='Cảm xúc của anh chị :3c'
                    ref={inputRef}
                />
            </div>
            <NextPage
                href='/lastpage'
                onClick={async () => {
                    if (inputRef.current == null) return;
                    const { data, error } = await supabase
                        .from("last_message")
                        .insert([{ messages: inputRef.current?.value }]);
                    console.log(data, error);
                }}
            />
        </>
    );
}
