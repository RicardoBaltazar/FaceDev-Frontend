import Header from '../components/Header';
import * as S from '../styles/feed';
import { useFetch } from '../hooks/useFetch';

type Posts = {
  post: string
}

function Home(props: any) {
  const { data: post, isFetching } = useFetch<Posts[]>('/post');
  const { response } = props;
  console.log(response);

  return (
    <S.Wrapper>

      <Header />

      <S.Main>

        <S.SideBox>
          <S.Title>My Profile</S.Title>
          <S.BasicCard>
            <S.ProfileImage
              src="https://images.unsplash.com/photo-1650265424401-9d34eecae180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
              alt="Foto de perfifl do usuário"
              width={50}
              height={50}
            />
            <S.ProfileName>
              Ricardo Baltazar
            </S.ProfileName>

            <small>Porto Alegre</small>
          </S.BasicCard>

        </S.SideBox>

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

        <S.SideBox>
          <S.Title>Featured Video</S.Title>
          <S.BasicCard>
            <iframe
              src="https://www.youtube.com/embed/pg3nRPk13Js"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </S.BasicCard>

        </S.SideBox>

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
