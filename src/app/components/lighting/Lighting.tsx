"use client";
import React, { useRef } from 'react';
import './Lighting.css';
import { Hover } from '../../utils/Hover';
import Image from 'next/image';
import lightingImg from '../../../../public/images/lighting.jpg';
import lightingImg2 from '../../../../public/images/lighting3.jpg';

export const Lighting = () => {
    const lightingRef = useRef(null);

    const hover1 = Hover(lightingRef, {
        x: -10,
        y: 20,
        z: 4,
    });

    const hover2 = Hover(lightingRef, {
        x: 20,
        y: 20,
        z: 7,
    });

    const hover3 = Hover(lightingRef, {
        x: -20,
        y: -20,
        z: -7,
    });


  return (
    <div className='lighting' >
        <div className='lightingImgs' ref={lightingRef} style={{transform: hover1.changeCoordinate}}>

            <Image ref={lightingRef} className='lightingImg' src={lightingImg} alt=''
            height={450} width={400}
            style={{
                objectFit: "contain",             
                transform: hover2.changeCoordinate,
                transition:hover2.transition,
               
            }} />

            <Image ref={lightingRef} className='lightingImg' src={lightingImg2} alt=''
            height={450} width={400}
            style={{
                objectFit: "contain",
                transform: hover3.changeCoordinate,
                transition:hover3.transition,

            }} />
        </div>
    </div>
  )
}
