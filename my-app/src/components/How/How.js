import React from 'react';
import { IoMdMailUnread,IoReceipt } from 'react-icons/io';
import {FaGift, FaUserFriends, FaGlassCheers, FaCheck, FaAsterisk, FaCheckCircle } from 'react-icons/fa'
import {GiBuyCard, GiClick } from 'react-icons/gi'

import {  SectionDivider  } from '../../styles/GlobalComponents';
import { List, ListContainer, SectionHow,ListItem, ListParagraph, ListTitle, SectionAbout, SectionWorks, ListItem2 } from './HowStyles';

const How = () =>  (
  <SectionHow id="how">
    <SectionWorks>How It Works</SectionWorks>
    <SectionAbout>
      It has never been easier to go on that magical Vacation. <br/> Just follow these easy steps
    </SectionAbout>
    <List>
      <ListItem>
        <picture>
          <GiBuyCard size="7rem" color='black' />
        </picture>
        <ListContainer>
          <ListTitle>Step One</ListTitle>
          <ListParagraph>
            Mint Your
            NFT
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <IoMdMailUnread size="7rem" color='black' />
        </picture>
        <ListContainer>
          <ListTitle>Step Two</ListTitle>
          <ListParagraph>
          We will e-mail you your Vacation Certificate
           for your complimentary 7 night stay!
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GiClick size="7rem" color='black' />
        </picture>
        <ListContainer>
          <ListTitle>Step Three</ListTitle>
          <ListParagraph>
          Go to <br/> RedeemVacations.com
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <picture>
          <FaCheckCircle size="7rem" color='black' />
        </picture>
        <ListContainer>
          <ListTitle>Step Four</ListTitle>
          <ListParagraph>
          Activate your voucher!
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaGift size="7rem" color='black' />
        </picture>
        <ListContainer>
          <ListTitle>Step Five</ListTitle>
          <ListParagraph>
          Pay the taxes and Send us a receipt with your taxes and we will cover up to 3 nights worth!

          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaGlassCheers size="7rem" color='black' />
        </picture>
        <ListContainer>
          <ListTitle>Step Six</ListTitle>
          <ListParagraph>
          Tell us where you are heading!!!
          </ListParagraph>
        </ListContainer>
      </ListItem>



    </List>
    <ListItem2>

    <picture>
          <FaUserFriends size="5rem" color='black' />
        </picture>
          <ListTitle>Final Step</ListTitle>
          <ListParagraph>
          Tell your friends and receive $25 when they buy their NFTY Vacation Club NFT!
                    </ListParagraph>
                    <br/>
                    <picture>
          <FaAsterisk size="2rem" color='black' />
        </picture>
                    <ListParagraph>
                    You have ability to pick up to a 7 night resort stay in select locations - 
                    Minimum is 4 day/3 nights                   </ListParagraph>
        <br/>
</ListItem2>
  </SectionHow>
);

export default How;
