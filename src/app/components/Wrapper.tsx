"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion';

interface params {
    children: React.ReactNode;
    direction : number;
    height: any;

}
export const Wrapper = ({children, direction, height} : params) => {
    const scrollRef =useRef(null);
    const {scrollYProgress} = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
        
    });

    const xTransform = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, direction]);

  return (
    <div ref={scrollRef} >
        <motion.div style={{
            position: "relative",
            height: height,
            zIndex: 6,
            translateX : xTransform,
            marginTop: "7rem",

        }}>
            {children}
        </motion.div>
    </div>
  )
}
