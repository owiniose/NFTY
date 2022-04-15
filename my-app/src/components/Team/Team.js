import React from 'react';
import { Section, SectionDivider, SectionText, SectionTeam } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph,SectionTextWorks, ListTitle, SectionAbout, ListContainerLast, ListItem2 } from './TeamStyles';
import TeamImg from '../TeamImg/TeamImg';

const Team = () =>  (
  <SectionTeam id="tech">
    <SectionDivider divider />
    <SectionTextWorks>Meet The Team</SectionTextWorks>
    <SectionAbout>
      It has never been easier to go on that magical Vacation. <br/> Just follow these easy steps
    </SectionAbout>
    
    <List>
      <ListItem>
      
        <ListContainer>

        <TeamImg/>
          <ListTitle>Conor McClintock aka "Thonman"</ListTitle>
          <ListParagraph>
          Dad, Husband, proud Navy Veteran, Entrepreneur, 
          and lover of JPEGs. He has been building innovation programs 
          and trying to make the government "not suck" for years before 
          finding his passion for NFTs and all things Web3 in early 2021. 
          NFTY Vacation Club is a cosmic collision of his love of innovation,
           travel, NFTs, and his obsession with creating over-the-top value
            for his community and customers.

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      
        <ListContainer>
        <TeamImg/>
          <ListTitle>Jarrett Wroten aka JWDubz</ListTitle>
          <ListParagraph>
          Built Internet Departments and optimized marketing for Automotive Dealerships from the ground up.
           Through his years of experience he has built strong inter-brand relationships and is excited to
            be able to offer the benefits of his relationships to the Web3 Community.
           "NFTY Vacation Club's primary focus is bridging the gap between IRL and Web3 experiences.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      
        <ListContainer>
        <TeamImg/>

          <ListTitle>Daniel Owini aka OwiniOse</ListTitle>
          <ListParagraph>
          
          </ListParagraph>
        </ListContainer>
      </ListItem>





    </List>
   
    <SectionDivider colorAlt />
  </SectionTeam>
);

export default Team;
