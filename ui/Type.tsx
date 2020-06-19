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

interface TypeProps {
  children: React.ReactNode;
  as?: string;
}

export const Type = (props: TypeProps): React.ReactElement => {
  const { as, children } = props;
  return <StyledTypography as={as}>{children}</StyledTypography>;
};
