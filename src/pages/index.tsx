import Header from '../components/Header';
import * as S from '../styles/feed';
import { useFetch } from '../hooks/useFetch';

type Posts = {
  post: string
}

function Home() {
  const { data: post, isFetching } = useFetch<Posts[]>('/post');

  return (
    <S.Wrapper>

      <Header />

      <S.Main>

        <S.Feed>
          <S.Title>News Feed</S.Title>

          <S.PostForm>
            <S.PostInput type="text" placeholder="Escreva Algo..." />
            <S.Button>
              Post
            </S.Button>
          </S.PostForm>

          <ul>
            {isFetching && <p>carregando...</p>}
            {
              post?.map((item: any) => {
                return (
                  <S.Post key={item.post}>
                    <p>{item.post}</p>
                  </S.Post>
                );
              })
            }
          </ul>
        </S.Feed>

      </S.Main>

    </S.Wrapper>
  );
}

export default Home;

// export const getServerSideProps = async () => {
//   // const data = await fetchData();

//   return {
//     props: {
//     }
//   };
// };
