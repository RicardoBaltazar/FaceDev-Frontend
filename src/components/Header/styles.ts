import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: var(--white);
  font-size: 1rem;
  padding: 0 3rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.05);
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 1.5rem;
  font-weight: 600;
  border: 2px solid var(--white);
  padding: 1rem 0;
  cursor: pointer;
  transition: .2s;
  &:hover {
    Color: var(--primary);
    border-bottom: 2px solid var(--primary);
  }
`;

export const Button = styled.button`
  color: var(--primary);
  background-color: var(--white);
  padding: .3rem 2rem;
  border: 1px solid var(--primary);
  border-radius: 4px;
  font-size: .7rem;
  font-weight: 600;
`;
