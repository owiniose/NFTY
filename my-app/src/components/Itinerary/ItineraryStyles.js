import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const SectionAbout = styled.p`
text-align: left;
font-size: 1.5em;
  font-weight: 300;
  padding-bottom: 3.6rem;

  

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1em;
  margin: 2rem 0;
  width: 100%;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  background: #03989e;
  padding :1em;
  border-radius: 11px;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`
export const ListContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  background: #03989e;
  padding-top: 1em;
  padding-left: 1em;
  padding-bottom: 2.2em;
  border-radius: 11px;


  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`
export const ListContainerLast = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`
export const SectionTitle = styled.h3`
  background-color:white;  
  font-weight: 800;
  font-size: ${(props) => props.main ? '75px' : '64px'};
  line-height: ${(props) => props.main ? '72px' : '56px'};
  max-width: 100%;
  background: white;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5em;
  padding: ${(props) => props.main ? '5px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '56px' : '48px'};
    line-height: ${(props) => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '4px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '28px' : '32px'};
    line-height: ${(props) => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '6px 0 8px' : '0'};
    align-content: center;
  }
`

export const ListTitle = styled.h4`
  
  padding-top:1em;
  padding-bottom:1em;
  font-size: 2em;
  line-height: 30px;
  letter-spacing: 3px;
  color: black;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 24px;
    line-height: 28px;
    }
    
    @media ${props => props.theme.breakpoints.sm}{
    font-size: 30px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
    text-align: center;    

}
`

export const ListLast = styled.h4`
  
font-size: 18px;
  line-height: 30px;
  color: black;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 24px;
    line-height: 28px;
    }
    
    @media ${props => props.theme.breakpoints.sm}{
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
    text-align: left;
    

}
`

export const ListParagraph = styled.p`
font-size: 16px;
line-height: 28px;
font-weight: light;

letter-spacing: 0.02em;
color: #FFFFFF;
margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 10px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 14px;
  line-height: 22px;
  text-align: left;



 }
`



export const ListItem = styled.div`
  
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 34px;
  text-align:left;
  flex-direction: column;
  max-width: 95%;
}
`
export const ListItem2 = styled.ul`
  list-style-position: inside;
  list-style-type: circle;
  font-size: 1.2em;
  padding: 0.5em;


@media ${props => props.theme.breakpoints.md}{
  
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  text-align:left;
  flex-direction: column;
  
}
`

export const ListIcon = styled.img`
display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
