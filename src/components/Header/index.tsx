import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.Menu>
        <S.List>
          <S.Item>Feed</S.Item>
          <S.Item>Places</S.Item>
          <S.Item>Featured</S.Item>
          <S.Item>About Us</S.Item>
        </S.List>

        <S.Button
          type="button"
        >
          LOGOUT
        </S.Button>
      </S.Menu>
    </S.Header>
  );
}

export default Header;
