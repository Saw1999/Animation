"use client";
import React, { useRef } from 'react';
import './Header.css';
import Image from 'next/image';
import logo from '../../../../public/images/pagoda-logo.jpg';
import baganPagodas from '../../../../public/images/bagan-pagodas.jpg';
import Link from 'next/link';
import { Button } from '../button/Button';
import { BiCalendarHeart } from "react-icons/bi";
import { FaRocket } from 'react-icons/fa';
import { MdOutlineReadMore } from "react-icons/md";
import { Abril_Fatface } from 'next/font/google';
import {Hover} from '../../utils/Hover';

const abrilFont = Abril_Fatface({
    subsets: ['latin'],
    weight:'400',

});



export const Header = () => {
    
    
    const headerRef = useRef<HTMLDivElement>(null);
    
    const headerHover = Hover(headerRef, {
        x: 30,
        y: -40,
        z: 30
    });

    const imgHover = Hover(headerRef, {
        x: 20,
        y: -5,
        z: 11,
    });


  return (
    <div className='header' ref={headerRef}>
        <nav className='navContainer'>
            <div className='navLogo'>
                <Image style={{borderRadius:"50px"}} src={logo} alt='pagoda logo' width={50} height={50} />
                <h2>Phaya</h2>
            </div>
            <div className='navInput'>
                <input type='text' placeholder='Search here' />
            </div>
            <ul className='navMenu'>
                <li>
                    <Link href="">Home</Link>
                </li>
                <li>
                    <Link href="">City</Link>
                </li>
                <li>
                    <Link href="">Pagoda</Link>
                </li>
                <li>
                    <Link href="">About</Link>
                </li>
                <Button name="Book" icon={<BiCalendarHeart />} />
            </ul>
        </nav>
        <div className='headerContent'>
            <div className='headerText'>
                <h1 className={abrilFont.className}>Famous pagodas in Myanmar</h1>
                <p>Buddhism is the main religion in Myanmar. Burmese people adopted Theravada Buddhism back 
                    in 1057 but the earliest Buddhism-related temples date back to the 9th by the Pyu and Mon people. 
                    If you’ve visited Myanmar, you’ve certainly seen a variety of Buddhist religious structures. 
                    Myanmar is home to many famous pagodas and temples that you should not miss visiting.</p>
                <div className='headerBtns'>
                    <Button name="Get Started" icon={<FaRocket />} background='#FBA834' color='black' border='none'/>
                    <Button name="Learn More" icon={<MdOutlineReadMore />}/>             
                </div>
            </div>
            <div className='headerImg'>
                <div className='img' style={{
                    transform: headerHover.changeCoordinate
                }}>
                    <Image style={{
                        borderRadius:"10px",
                        transform: imgHover.changeCoordinate}} src={baganPagodas} alt='' width={550} height={350} />
                </div>
            </div>
        </div>
    </div>
  )
}
