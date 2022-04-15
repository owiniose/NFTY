import styled from 'styled-components'


export const Img = styled.img`
width: 70%;
height: 70%;

@media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
  }
`