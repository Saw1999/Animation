'use client';

import React, { useRef } from 'react';
import './Fullpage.css';
import Image from 'next/image';
import baganPagoda from '../../../../public/images/bagan-pagodas3.jpg';
import {motion, useScroll, useTransform } from 'framer-motion';

export const Fullpage = () => {
  const fullPageRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: fullPageRef,
    offset: ["start end", "end start"],

  });

  const scale = useTransform(scrollYProgress,[0, 0.5, 1], [0, 1, 1.3])

  return (
    <div className='fullpage' ref={fullPageRef}>
        <motion.div className="fullpageImage" style={{
          scale: scale,
        }}>
            <Image className='baganPagodaImg' src={baganPagoda} alt=''  />
        </motion.div>
    </div>
  )
}
