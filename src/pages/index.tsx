import Header from '../components/Header';
import * as S from '../styles/feed';

export default function Home() {
  return (
    <S.Wrapper>

      <Header />

      <S.Main>

        <S.Feed>
          <S.Title>News Feed</S.Title>

          <S.Post>
            <p>Bom dia, esta é uma postagem de teste!</p>
          </S.Post>

          <S.Post>
            <p>Primeiro Post</p>
          </S.Post>
        </S.Feed>

      </S.Main>

    </S.Wrapper>
  );
}
