"use client";
import React from 'react';
import './Card.css';
import Image from 'next/image';

interface params {
  title: string;
  desc?: string;
  img?: string;
}
export const Card = ({title, desc, img} : params) => {
  return (
    <div className='card'>
        <div className='cardBox'>
          <p className='cardPopular'>Popular</p>
          <div className='cardText'>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
          <Image className='cardImg' src={img} alt=''  />
        </div>
        <div className='cardOverlay'></div>
    </div>
  )
}
