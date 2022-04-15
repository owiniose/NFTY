import styled from 'styled-components';

export const LeftSection = styled.div`
  margin-top: 5em;
  margin-bottom: 2em;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    padding-right: 2em;
    flex-direction: column;
    
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const TopSection = styled.div`
  width: 100%;
  margin-top : auto;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    }
`;
