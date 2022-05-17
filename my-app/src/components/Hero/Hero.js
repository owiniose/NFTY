import React from 'react';
import { Section, SectionTextTop, SectionTextBottom, SectionTextMain } from '../../styles/GlobalComponents';
import RenderButton from './RenderButton';
import { LeftSection } from './HeroStyles';
import RenderButton2 from './RenderButton2';



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
           With $299 Only!
        </SectionTextBottom>
        <RenderButton2/>
      </LeftSection>
    </Section>
  </>
);

export default Hero;