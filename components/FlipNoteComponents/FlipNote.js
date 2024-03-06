import Image from "next/image";
import { useState, useEffect } from "react";
import LeftArrow from "../PublicComponents/LeftArrow.js";

export default function FlipNote() {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            document.getElementsByClassName('card')[0].style.visibility = 'visible'
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!imageLoaded && (
                <div className="loading-spinner">
                    <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                    </svg>
                </div>
            )}

            <div className={`card`}>
                <div className="imgBox">
                    <div className="bark"></div>
                    <Image
                        src="/cover2.jpg"
                        alt='FlipNoteCover'
                        width={300}
                        height={400}
                    />
                </div>
                <div className="details">
                    <h4 className="color1">🥰🥰😘😘😻😻</h4>
                    <h4 className="color2 margin">🥳🥳🎉🎉🤩🤩</h4>
                    <p>Dear Ange</p>
                    <p>Happy birthday to you, my Love, </p>
                    <p>on your special day, I love you now,</p>
                    <p>and always will, though challenges may come our</p>
                    <p>our way, remember, there&apos;s always light ahead</p>
                    <p>in the darkest tunnels, we&apos;ll find our way.</p>
                    <p>Baby, always remember to always</p>
                    <p>take care of yourself, I love you Baby</p>
                    <p className="text-right">Happy Birthday Labidabs</p>
                    <p className="text-right">♡Jeric</p>
                </div>
            </div>
            <LeftArrow />
        </>
    );
}
