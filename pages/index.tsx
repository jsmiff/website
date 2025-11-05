import React from 'react';
import styled from 'styled-components';
import { Hero } from '../ui/Hero';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Type } from '../ui/Type';

const PageWrapper = styled.div`
  min-height: 100vh;
  background: white;
`;

const Headline = styled.h1`
  font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subheadline = styled.h2`
  font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #6b7280;
  margin: 0 0 3rem 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin: 0 0 1rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
  font-size: 1.2rem;
  color: #6b7280;
  text-align: center;
  margin: 0 0 4rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #a78bfa 0%, #c084fc 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 1rem 0;
`;

const ServiceDescription = styled.p`
  font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.7;
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const AboutSection = styled.div`
  background: linear-gradient(135deg, #f5f3ff 0%, #fae8ff 100%);
  padding: 6rem 0;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  p {
    font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
    font-size: 1.1rem;
    color: #4b5563;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #c084fc 0%, #a78bfa 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
`;

const CTASection = styled.div`
  background: linear-gradient(135deg, #a78bfa 0%, #c084fc 100%);
  padding: 6rem 2rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1.5rem 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-family: 'Spartan', 'Helvetica Neue', helvetica, sans-serif;
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 2.5rem 0;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const WhiteButton = styled(Button)`
  background: white;
  color: #a78bfa;
  border-color: white;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const Index: React.FC = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <Hero>
        <Headline>Rejuvenate Your Natural Beauty</Headline>
        <Subheadline>
          Experience world-class aesthetic treatments in a luxurious, relaxing environment
        </Subheadline>
        <ButtonGroup>
          <Button variant="primary">Book Consultation</Button>
          <Button variant="secondary">Our Services</Button>
        </ButtonGroup>
      </Hero>

      {/* Services Section */}
      <Container>
        <SectionTitle>Our Signature Treatments</SectionTitle>
        <SectionSubtitle>
          Discover our range of advanced aesthetic treatments designed to help you look and feel your best
        </SectionSubtitle>
        <ServicesGrid>
          <Card>
            <ServiceIcon>✨</ServiceIcon>
            <ServiceTitle>Botox & Fillers</ServiceTitle>
            <ServiceDescription>
              Reduce fine lines and restore volume with our expert injectable treatments. Our skilled
              practitioners deliver natural-looking results tailored to your unique features.
            </ServiceDescription>
          </Card>
          <Card>
            <ServiceIcon>💆</ServiceIcon>
            <ServiceTitle>Facial Rejuvenation</ServiceTitle>
            <ServiceDescription>
              Advanced facial treatments including hydrafacials, chemical peels, and microneedling to reveal
              radiant, youthful skin and address specific concerns.
            </ServiceDescription>
          </Card>
          <Card>
            <ServiceIcon>⚡</ServiceIcon>
            <ServiceTitle>Laser Treatments</ServiceTitle>
            <ServiceDescription>
              State-of-the-art laser technology for hair removal, skin resurfacing, pigmentation correction,
              and vascular treatments with minimal downtime.
            </ServiceDescription>
          </Card>
          <Card>
            <ServiceIcon>💎</ServiceIcon>
            <ServiceTitle>Body Contouring</ServiceTitle>
            <ServiceDescription>
              Non-invasive body sculpting treatments to reduce stubborn fat, tighten skin, and enhance your
              natural contours without surgery.
            </ServiceDescription>
          </Card>
          <Card>
            <ServiceIcon>🌟</ServiceIcon>
            <ServiceTitle>IV Therapy</ServiceTitle>
            <ServiceDescription>
              Customized vitamin infusions to boost energy, enhance immunity, improve skin health, and support
              overall wellness from within.
            </ServiceDescription>
          </Card>
          <Card>
            <ServiceIcon>🧖</ServiceIcon>
            <ServiceTitle>Wellness & Spa</ServiceTitle>
            <ServiceDescription>
              Luxurious spa treatments including massages, aromatherapy, and relaxation therapies to restore
              balance and promote holistic wellbeing.
            </ServiceDescription>
          </Card>
        </ServicesGrid>
      </Container>

      {/* About Section */}
      <AboutSection>
        <Container>
          <AboutContent>
            <AboutText>
              <SectionTitle style={{ textAlign: 'left' }}>About Our MedSpa</SectionTitle>
              <p>
                Welcome to a sanctuary of beauty and wellness where medical expertise meets luxury spa
                indulgence. Our state-of-the-art facility combines the latest aesthetic technology with a
                serene, sophisticated atmosphere.
              </p>
              <p>
                Our team of board-certified physicians, licensed aestheticians, and wellness experts are
                dedicated to providing personalized treatment plans that address your unique needs and goals.
                We believe in enhancing your natural beauty while prioritizing your safety and comfort.
              </p>
              <p>
                With years of experience and a commitment to ongoing education, we stay at the forefront of
                aesthetic medicine to offer you the most effective, innovative treatments available.
              </p>
              <Button variant="primary">Meet Our Team</Button>
            </AboutText>
            <AboutImage>🏥</AboutImage>
          </AboutContent>
        </Container>
      </AboutSection>

      {/* CTA Section */}
      <CTASection>
        <CTATitle>Begin Your Transformation Today</CTATitle>
        <CTAText>
          Schedule your complimentary consultation and discover how we can help you achieve your aesthetic
          goals
        </CTAText>
        <ButtonGroup>
          <WhiteButton variant="primary">Schedule Consultation</WhiteButton>
        </ButtonGroup>
      </CTASection>
    </PageWrapper>
  );
};

export default Index;
