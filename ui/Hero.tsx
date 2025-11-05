import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f3ff 0%, #fae8ff 50%, #fce7f3 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%);
    border-radius: 50%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  padding: 2rem;
  text-align: center;
  z-index: 1;
  position: relative;
`;

interface HeroProps {
  children: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({ children }) => {
  return (
    <HeroContainer>
      <HeroContent>{children}</HeroContent>
    </HeroContainer>
  );
};
