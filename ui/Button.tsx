import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
  border: 2px solid;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  ${(props) =>
    props.variant === 'primary'
      ? `
    background: linear-gradient(135deg, #a78bfa 0%, #c084fc 100%);
    color: white;
    border-color: transparent;
    box-shadow: 0 4px 15px rgba(167, 139, 250, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(167, 139, 250, 0.4);
    }
  `
      : `
    background: transparent;
    color: #a78bfa;
    border-color: #a78bfa;

    &:hover {
      background: #a78bfa;
      color: white;
      transform: translateY(-2px);
    }
  `}
`;

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
