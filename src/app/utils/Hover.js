"use client";
import React, { useEffect, useState } from 'react';

export const Hover = (ref, {x=0, y=0, z=0}) => {
    const [coordinate, setCoordinate] = useState({
        x: 0,
        y: 0
    });
    const [isHovering, setIsHovering] = useState(false);

    const mouseEnterHandler = () => {
        setIsHovering(true);
    };

    const mouseMoveHandler =(e) =>{
        const {offsetWidth : width, offsetHeight: height} = ref.current;
        const {clientX, clientY} = e;

        const x = (clientX - width / 2) / width;
        const y = (clientY - height / 2) / height;

        setCoordinate({x, y}); 
    };

    const mouseLeaveHandler = () => {
        setIsHovering(false);
    };

    const {x: xCoord, y: yCoord} =coordinate;

        const xChange = isHovering ? xCoord * x : 0;
        const yChange = isHovering ? yCoord * y : 0;
        const zChange = isHovering ? z : 0;

        const changeCoordinate = `perspective(1000px) rotateX(${yChange}deg) rotateY(${-xChange}deg) translateZ(${zChange}px)`;
        const transition = isHovering ?  'none' : 'all 0.05s ease' ;

    useEffect(() =>{
        const {current} = ref;

        current.addEventListener("mouseenter", mouseEnterHandler);
        current.addEventListener("mousemove", mouseMoveHandler);
        current.addEventListener("mouseleave", mouseLeaveHandler);

        return () => {
            current.removeEventListener("mouseenter", mouseEnterHandler);
            current.removeEventListener("mousemove", mouseMoveHandler);
            current.removeEventListener("mouseleave", mouseLeaveHandler);
        };

    },[ref]);

    return ({changeCoordinate, transition});
}