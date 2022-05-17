import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: var(--white);
  font-size: 1rem;
  padding: 0 3rem;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    align-items: center;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 1.5rem;
  font-weight: 600;
  color: var(--black);
  padding: 1rem 0;
  cursor: pointer;
  transition: .2s;
  &:hover {
    Color: var(--primary);
  }
`;

export const Button = styled.button`
  color: var(--primary);
  background-color: var(--white);
  padding: .5rem 2rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  font-size: .7rem;
  font-weight: 600;
  margin-left: 1rem;
`;
