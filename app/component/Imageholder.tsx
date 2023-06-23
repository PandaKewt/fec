import Image from "next/image";
import quinn from "../../public/quinn.png";

interface ImageholderProps {
    src: string;
}

export default function Imageholder(props: ImageholderProps) {
    return (
        <div className='w-2/5 h-full inline-block'>
            <Image className='w-32 mx-auto translate-y-4' src={quinn} alt='' />
            <div className='bg-gray-700 h-3/4 w-full rounded-3xl p-5'>
                <div className='relative w-full h-full'>
                    <Image src={props.src} fill={true} alt='' className='object-scale-down' sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                </div>
            </div>
        </div>
    );
}
