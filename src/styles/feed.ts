import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    background-color: var(--background);
    height: 100vh;
`;

export const Main = styled.main`
border: 1px solid blue;
display: flex;
justify-content: space-around;
`;

export const Feed = styled.div`
border: 1px solid red;
width: 90%;
display: flex;
flex-direction: column;
text-align: left;
@media (min-width: 900px) {
    width: 480px;
  }
`;

export const Title = styled.h1`
font-size: 1.4rem;
font-weight: bold;
color: var(--black);
margin: 1.6rem 0;
`;

export const Post = styled.div`
    background-color: var(--white);
  font-size: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
  border-radius: 8px;
  margin: 0.5rem 0;
`;
