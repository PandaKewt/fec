"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

// import { useRef } from "react";

export default function Upload() {
    // const fileInput = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<{}>({});

    useEffect(() => {
        console.log(file);
    }, [file]);

    function getBase64(file: File) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }

    async function handleFileInputChange(e: ChangeEvent<HTMLInputElement>) {
        console.log(e.target.files);
        if (e.target.files === null) return;
        const files = Array.from(e.target.files);
        const base64Files = await Promise.all(files.map((file) => getBase64(file)));
        const uploadData = base64Files.map((file) => ({ data: file }));
        setFile(uploadData);
    }

    async function upload() {
        
        // console.log(data, error);
    }

    return (
        <div>
            <input type='file' multiple={true} onChange={handleFileInputChange} />
            <button onClick={upload}>Upload</button>
        </div>
    );
}
