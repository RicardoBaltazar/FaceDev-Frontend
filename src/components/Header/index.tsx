import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from '../../pages/_app';
import * as S from './styles';

function Header() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <S.Header>
      <S.Menu>
        <S.List>
          <S.Item>Feed</S.Item>
          <S.Item>Places</S.Item>
          <S.Item>Featured</S.Item>
          <S.Item>About Us</S.Item>
        </S.List>

        <div>
          <Switch
            onChange={toggleTheme}
            checked={!isLightTheme}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onHandleColor="#DDE1E9"
            offHandleColor="#DDE1E9"
            offColor="#191919"
            onColor="#FFFFFF"
          />
          <S.Button
            type="button"
          >
            LOGOUT
          </S.Button>
        </div>

      </S.Menu>
    </S.Header>
  );
}

export default Header;
