import React from 'react';
import { Typography } from '../ui/Typography';
import { Section } from '../ui/Section';
import { Page } from '../ui/Page';

const Index: React.FC = () => {
  return (
    <Page>
      <Section p={1}>
        <Typography as="h1">json.nyc</Typography>
        <br />
        <Typography as="p">bill likes to floss</Typography>
      </Section>
    </Page>
  );
};

export default Index;
