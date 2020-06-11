import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.div`
  flex: 0 0 80%;
  padding: ${(props) => (props.p ? props.p : 0)}em;
`;

export const Section = ({ children, p = 0 }) => {
  return <StyledSection p={p}>{children}</StyledSection>;
};
