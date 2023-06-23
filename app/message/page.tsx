"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import "swiper/css/keyboard";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface message {
    id: number;
    messages: string;
    createdAt: string;
}

export default function Letter() {
    const [messages, setMessages] = useState<message[]>([]);
    useEffect(() => {
        supabase
            .from("messages")
            .select("*")
            .then((res) => {
                if (res.data == null) return;
                console.log(Array.from(res.data));
                setMessages(res.data);
            });
    }, []);
    return (
        <div className='h-full w-full p-16'>
            <Swiper
                modules={[EffectCards, Pagination, Keyboard]}
                effect={"cards"}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                className='h-full w-full'
                rewind={true}
            >
                {messages.map(({ messages }, index) => {
                    return (
                        <SwiperSlide
                            className='rounded-xl bg-red-500 w-full'
                            key={`message ${index}`}
                        >
                            <div className='flex place-items-center place-content-center h-full p-14 overflow-y-auto'>
                                <p className='inline'>{messages}</p>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
