import React from 'react';

interface params {
    children: React.ReactNode;
    ref?: React.RefObject<HTMLDivElement>;
}

export const SectionLayout = ({children, ref} : params) => {
  return (
    <section style={{padding: "20px 60px", display:"flex", justifyContent:"center", alignItems:"center" }}>
        {children}
    </section>
  )
}
