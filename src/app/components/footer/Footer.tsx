"use client";
import React from 'react';
import "./Footer.css";
import logo from '../../../../public/images/pagoda-logo.jpg';
import Image from 'next/image';
import PageFooter from '../../utils/PageFooter';
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';
import Link from 'next/link';


export const Footer = () => {
  return (
    <div className='footer'>
        <nav className='footerNav'>
          <div className="footerLogoContainer">
            <div className="footerLogo">
                <Image style={{borderRadius:"50px"}} src={logo} alt='pagoda logo' width={50} height={50} />
                <h2>Phaya</h2>
            </div>
            <div className='footerInput'>
                <input type='text' placeholder='Subscribe Here.....' />
                <button>&#8594;</button>
            </div>
            <p>Create, Explore, Book now to not miss beholding Graceful Pagodas in Myanmar.</p>
            <div className='socialIcons'>
              <AiFillInstagram />
              <AiFillGithub />
              <AiFillLinkedin />
              <AiFillTwitterCircle />
              <BsDiscord />
            </div>
          </div>
          <div className='footerLinks'>
            {PageFooter.map((item:any, index: number) => {
              return (
                <div key={index}>
                  <h4>{item.title}</h4>
                  <ul>
                    {item.links.map((itemLink : any, index : number) => {
                      return (
                        <li key={index}>
                          <Link className='footerLink' href="">{itemLink.name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

        </nav>
        <p className='footerRights'>
          <Link className='footerRightsItem' href="">@2024 Saw Burmese | All rights reserved.</Link>
          <Link className='footerRightsItem' href="">Privacy Policy | Terms of Service</Link>
        </p>
        
    </div>
  )
}
