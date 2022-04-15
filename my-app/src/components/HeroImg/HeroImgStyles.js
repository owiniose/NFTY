import styled from 'styled-components'


export const Img = styled.img`
width:90%;
height:90%;

overflow: hidden;
margin-left: 2em;

@media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }
`