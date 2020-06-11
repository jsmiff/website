import React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  justify-content: center;
`;

export const Page: React.FC = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
