import styled from 'styled-components'


export const Img = styled.img`
width: 70%;
height: 70%;
display: block;
  margin-left: auto;
  margin-right: auto;

@media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }
`