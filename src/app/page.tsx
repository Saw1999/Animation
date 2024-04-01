"use client";
import styled from "styled-components";
import { Header } from "./components/header/Header";
import { SectionLayout } from "./components/SectionLayout";
import { Card } from "./components/card/Card";
import {Cards} from "./utils/Cards";
import { Fullpage } from "./components/fullpage/Fullpage";
import { Text } from "./components/text/Text";
import { Footer } from "./components/footer/Footer";
import { Lighting } from "./components/lighting/Lighting";
import { Wrapper } from "./components/Wrapper";
import {motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";

const StyledMain = styled.main`
  width: 100%;
  min-height: 100vh;

  .cards {
    display: grid;
    position:absolute;
    grid-template-columns: repeat(6, 30rem);
    gap: 3rem;
    align-items: center;

    
  }
  .video {
    align-self: center;
    width: 80%;
    padding: 2rem;
    background: var(--color-bg);
    border-radius: 10px;
    border: 1px solid var(--color-border);
    margin-bottom: 60px;
    iframe {
      border: none;
      width: 100%;
      height:30rem;
    }
  }
`;

export default function Home() {
  const videoRef  = useRef(null);

  const {scrollYProgress} = useScroll({
    target: videoRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1.3]);



  return (
    <>
      <Header />
      <StyledMain className="mainContainer">
        <SectionLayout>
          <Wrapper height='30rem' direction={-2400}>
              <div className="cards">
                {Cards.map((card, index) => {
                  return <Card key={index} title={card.title} desc={card.desc} img={card.img} />
                })}
              </div>
            </Wrapper>
        </SectionLayout>

        <Fullpage />

        <SectionLayout>
          <Wrapper height='30rem' direction={-2400}>
            <div className="cards">
              {Cards.map((card, index) => {
                return <Card key={index} title={card.title} desc={card.desc} img={card.img} />
              })}
            </div>
          </Wrapper>
        </SectionLayout>

        <SectionLayout>
          <Text />
        </SectionLayout>

        <SectionLayout>
          <motion.div 
          className="video" 
          ref={videoRef}
          style={{
            opacity: opacity,
            scale: scale,
          }}>

          <iframe 
          src="https://www.youtube.com/embed/otVD-eTS-5A?si=o7i0zRXGr29k9HbK" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; 
          clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </motion.div>
        </SectionLayout>

        <SectionLayout>
          <Text />
        </SectionLayout>

        <SectionLayout>
            <Lighting />
        </SectionLayout>

        <Footer />
      </StyledMain>
    </>
  );
}
