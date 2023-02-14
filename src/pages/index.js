import Button from '@/components/button/Button';
import Headline from '@/components/headline/Headline';
import Section from '@/components/section/Section';

const Index = () => {
  return (
    <main>
      <Section>
        <h1 className="title_large">
          Your <span>new</span> business card
        </h1>
        <br />
        <Button href="/">Join the waitlist</Button>
      </Section>
      <Section id="features">
        <Headline>
          <h2 className="title">Features</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. <br />
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
          </p>
        </Headline>
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
