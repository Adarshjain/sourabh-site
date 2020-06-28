import React, {useEffect, useState} from 'react';
import useScrollPosition from '@react-hook/window-scroll';

export default function Nav() {
    return window.innerWidth > 640 ? <FullNav/> : <MobileNav/>;
};

function MobileNav() {
    const variants = {
        full: {width: 'calc(100% - 80px)'},
        small: {width: 'calc(80% - 80px)'},
    };
    const [isFull, setIsFull] = useState(false);
    const scrollY = useScrollPosition(60 /*fps*/);

    useEffect(() => {
        setIsFull(scrollY > 40);
    }, [scrollY, isFull]);

    return (
        <div className='flex flex-dr jc-sb nav__container'
             style={isFull ? variants.full : variants.small}
        >
            <div>
                Mobile
            </div>
            <div>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Contact</a>
                <a href="">Search</a>
            </div>
        </div>
    );
}

function FullNav() {
    const variants = {
        full: {width: 'calc(100% - 80px)'},
        small: {width: 'calc(80% - 80px)'},
    };
    const [isFull, setIsFull] = useState(false);
    const scrollY = useScrollPosition(60 /*fps*/);

    useEffect(() => {
        setIsFull(scrollY > 40);
    }, [scrollY, isFull]);

    return (
        <div className='flex flex-dr jc-sb nav__container'
             style={isFull ? variants.full : variants.small}
        >
            <div>
                Sourabh Jewellers
            </div>
            <div>
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Contact</a>
                <a href="">Search</a>
            </div>
        </div>
    );
}
