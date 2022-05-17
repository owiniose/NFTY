import React from 'react'
import { SectionTechnologies, SectionDivider } from '../../styles/GlobalComponents'
import { SectionAbout, SectionTitle, List, ListContainer,ListContainer2, ListTitle, ListParagraph, ListItem, ListItem2} from './ItineraryStyles'

const Itinerary = () => {


  return (
    <SectionTechnologies id="Itenerary" >
            <SectionDivider divider />

        <SectionTitle>The Itinerary</SectionTitle>
        <SectionAbout>NFTY Vacation Club is bringing the travel industry to Web3 and Web3 to IRL. We are a full service Web3 Vacation club that gives members instant vacation perks upon purchasing one of our OG Membership NFTs. Membership will include an exclusive NFT, 1 annual vacation package, access to additional travel discounts, travel concierge service, giveaways,
             NFT and travel experts, community, and alpha, 
             exclusive IRL member events, and more!</SectionAbout>
        
        <List>
      <ListItem>
        {/* <picture>
          <GiBuyCard size="7rem" color='black' />
        </picture> */}
        <ListContainer>
          <ListTitle>OG WANDERER uNFT</ListTitle>
          <ListParagraph>
            <ListItem2>60 will be held by the team for giveaways and marketing.
            </ListItem2>
            <ListItem2>The first 3000 members on our “Early Check In” list will earn the 
            early mint price of $299 </ListItem2>
            <ListItem2>The next 3000 Check Ins will mint at $399 </ListItem2>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <picture>
          <IoMdMailUnread size="7rem" color='black' />
        </picture> */}
        <ListContainer2>
          <ListTitle>Utilities</ListTitle>
          <ListParagraph>
              
<ListItem2>          For every 1000 Check Ins, 2 lucky winners to receive up to an additional $1,500USD in airfare and expenses. (12 winners!)</ListItem2>
<ListItem2>           Mint Out Bonus: 1 Grand Prize winner who will receive an all expense paid trip plus an additional 1ETH. ​</ListItem2> 

          </ListParagraph>
        </ListContainer2>
      </ListItem>
      </List>

    </SectionTechnologies>
  )
}

export default Itinerary