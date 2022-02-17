import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    background-color: var(--background);
    height: 100vh;
`;

export const Main = styled.main`
display: flex;
justify-content: space-around;
`;

export const Feed = styled.div`
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

export const PostForm = styled.form`
background-color: var(--white);
  font-size: 1rem;
  padding: 0.6rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
  border-radius: 8px;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const PostInput = styled.input`
width: 90%;
margin: 0.2rem auto;
padding: 0.8rem 0.6rem;
border: none;
outline: none;
`;

export const Button = styled.button`
background-color: var(--primary);
color: var(--white);
font-weight: bold;
border: none;
outline: none;
border-radius: 4px;
padding: 0.4rem 1.8rem;
margin: 0.4rem 0;
&:hover,
    &:focus {
        filter: brightness(0.8);
    }
    &:disabled {
        opacity: 50%;
    }
`;
