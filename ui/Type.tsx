import React from 'react';
import styled from 'styled-components';

const StyledTypography = styled.p`
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  vertical-align: baseline;
  font-family: 'Spartan', 'Helvetica Neue', helvetica, 'Apple Color Emoji', arial, sans-serif;
  color: var(--type);
`;

export const Type = ({ children, as }) => {
  return <StyledTypography as={as}>{children}</StyledTypography>;
};
