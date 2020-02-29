import React from 'react';
import styled from 'styled-components';

const StyledTypography = styled.p`
  @font-face {
    font-family: 'Spartan';
    font-style: normal;
    font-weight: 400;
    src: local(''),
      url('/fonts/spartan-v1-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
      url('/fonts/spartan-v1-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: inherit;
  font-style: inherit;
  font-size: 100%;
  vertical-align: baseline;
  font-family: 'Spartan', 'Helvetica Neue', helvetica, 'Apple Color Emoji', arial, sans-serif;
  color: ${props => props.theme.primaryColor };
`

export const Typography = ({ children }) => {
  return <StyledTypography>{ children }</StyledTypography>
}
