import Button from '@/components/button/Button';
import Headline from '@/components/headline/Headline';
import Hero from '@/components/hero/Hero';
import Section from '@/components/section/Section';
import Features from '@/components/features/Features';
import styled from 'styled-components';

const Test = styled.h1`
  font-family: monospace;
`;

const Index = () => {
  return (
    <main>
      <Hero>
        <h1 className="title_large">
          Your <span>new</span> <br /> business card
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit massa mi.{' '}
          Aliquam in hendrerit urna.
        </p>
        <div className="flex">
          <Button
            onClick={() => {
              'click';
            }}
            ariaLabel="Join the waitlist"
          >
            Join the waitlist
          </Button>
          <Button
            link
            href="mailto:info@bzy.so"
            target
            ariaLabel="email the Bzy team"
          >
            Get in touch
          </Button>
        </div>
      </Hero>
      <Section>wallet interaction goes here</Section>
      <Section id="features" width="full">
        <Headline>
          <h2 className="title">Features</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. <br />
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
          </p>
        </Headline>
        <Features />
      </Section>
      <Section id="useCases">
        <Headline>
          <h2 className="title">Use cases</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. <br />
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
          </p>
        </Headline>
      </Section>
    </main>
  );
};

export default Index;
