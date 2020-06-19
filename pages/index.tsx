import React from 'react';
import { Section } from '../ui/Section';
import { Page } from '../ui/Page';
import { Type } from '../ui/Type';

const Index: React.FC = () => {
  return (
    <Page>
      <Section p={1}>
        <Type>json.nyc</Type>
      </Section>
    </Page>
  );
};

export default Index;
