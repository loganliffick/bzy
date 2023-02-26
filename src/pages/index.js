import Headline from '@/components/Headline';
import Hero from '@/components/Hero';
import HeroAfter from '@/components/Hero-after';
import Section from '@/components/Section';
import FeatureGrid from '@/components/features/FeatureGrid';
import UseCases from '@/components/UseCases';

const Index = () => {
  return (
    <main>
      <Hero />
      <HeroAfter />
      <Section id="features" width="full">
        <Headline>
          <h2 className="title">Features</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. <br />
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
          </p>
        </Headline>
        <FeatureGrid />
      </Section>
      <Section id="useCases" width="full">
        <Headline>
          <h2 className="title">Use cases</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. <br />
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla.
          </p>
        </Headline>
        <UseCases />
      </Section>
    </main>
  );
};

export default Index;
