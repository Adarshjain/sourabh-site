import React from 'react';
import Link from "next/link";

interface ImageCardInterface {
    title?: string,
    src: string,
    style?: any,
    onClick?: any,
    href: string
}

export default function ImageCard(props: ImageCardInterface) {

    return (
        <Link href={props.href}>
            <div className='image-card' style={props.style} onClick={props.onClick}>
                <img className='image-card__image' src={props.src}/>
            </div>
        </Link>
    );
};
