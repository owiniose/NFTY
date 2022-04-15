import React from 'react';
import { Section, SectionTextTop, SectionTextBottom, SectionTextMain } from '../../styles/GlobalComponents';
import RenderButton from './RenderButton';
import { LeftSection } from './HeroStyles';



const Hero = (props) => (
  <>
  <Section >
      <LeftSection>
              <SectionTextTop>
                Mint A
              </SectionTextTop>
        <SectionTextMain>
          VACATION
        </SectionTextMain>

        <SectionTextBottom>
           With $250 Only!
        </SectionTextBottom>
        <RenderButton/>
      </LeftSection>
    </Section>
  </>
);

export default Hero;