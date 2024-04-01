"use client";
import React, { useRef } from 'react';
import './Text.css';
import {motion, useScroll, useTransform } from 'framer-motion';


interface params {
    children: React.ReactNode;
}; 

const TextWrapper = ({children}: params) => {
    const textRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: textRef,
        offset: ["start end", "end start"],
    });
    
    const xTransform = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
    const opacity = useTransform(scrollYProgress, [1, 0.7, 0], [1, 1, 0]);
    const color = useTransform(
        scrollYProgress, 
        [0, 0.2, 0.4, 0.6, 0.8 , 1],
        ["#D3D3D3", "#D3D3D3", "#D3D3D3", "#FBA834", "#FBA834", "#FBA834" ]);


    return (
        <div ref={textRef}>
            <motion.p className='textContent' style={{
               translateX : xTransform,
               opacity : opacity,
               color: color,
            }}>
                {children}
            </motion.p>
        </div>
    )
};

export const Text = () => {
    
  return (
    <div className='text'>
        <TextWrapper>
            The Republic of the Union of Myanmar (Burma), full of the most sacred Buddhist Pagodas.
        </TextWrapper>
        <TextWrapper>
            The Republic of the Union of Myanmar (Burma), full of the most sacred Buddhist Pagodas.
        </TextWrapper>
        <TextWrapper>
            The Republic of the Union of Myanmar (Burma), full of the most sacred Buddhist Pagodas.
        </TextWrapper>
        <TextWrapper>
            The Republic of the Union of Myanmar (Burma), full of the most sacred Buddhist Pagodas.
        </TextWrapper>
        <TextWrapper>
            The Republic of the Union of Myanmar (Burma), full of the most sacred Buddhist Pagodas.
        </TextWrapper>
        <TextWrapper>
            The Republic of the Union of Myanmar (Burma), full of the most sacred Buddhist Pagodas.
        </TextWrapper>
        <TextWrapper>
            The Republic of the Union of Myanmar (Burma), full of the most sacred Buddhist Pagodas.
        </TextWrapper>
        <TextWrapper>
            The Republic of the Union of Myanmar (Burma), full of the most sacred Buddhist Pagodas.
        </TextWrapper>
    </div>
  )
}
