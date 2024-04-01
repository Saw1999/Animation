"use client";
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
    name: string;
    icon?: React.ReactNode;
    background?: string;
    color?: string;
    border?: string;
}

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    padding: 4px 14px;
    gap:2px;
    cursor: pointer;
    border-radius: 20px;
    border: 2px solid var(--color-border);
    transition: all 0.01s ease-in-out;
    font-weight: 500;

    &:hover {
        background: var(--color-border) !important;
        color: whitesmoke !important;
    }     
`;

export const Button = ({name, icon, background = "var(--color-bg)", color= "var(--color-font)", border} : ButtonProps) => {
    
  return (
    <StyledButton style={{
        background:background,
        color: color,
        border: border,
    }}>
        {icon && icon}
        {name}
    </StyledButton>
  )
}
