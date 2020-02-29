import React from 'react';
import styled from 'styled-components';

const StyledTypography = styled.p`
  color: ${props => props.theme.primaryColor };
`

export const Typography = ({ children }) => {
  return <StyledTypography>{ children }</StyledTypography>
}
