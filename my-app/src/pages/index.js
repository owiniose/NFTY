import Hero from '../components/Hero/Hero';
import HeroImg from '../components/HeroImg/HeroImg';
import How from '../components/How/How';
import Itinerary from '../components/Itinerary/Itinerary';
import Team from '../components/Team/Team';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <HeroImg/>
        {/* <BgAnimation /> */}
      </Section>
      <Itinerary/>
      <How/>
      <Team/>

       {/* <Projects />  */}

      {/* <Timeline /> */}
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
