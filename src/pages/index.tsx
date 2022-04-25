import { useState } from 'react';
import Header from '../components/Header';
import * as S from '../styles/feed';
import { useFetch } from '../hooks/useFetch';
import api from '../services/api';

type Posts = {
  post: string
}

function Home() {
  const { data: posts, isFetching } = useFetch<Posts[]>('/post');
  const [newPost, setNewPost] = useState<string>('');
  const [count, setCount] = useState(0);

  // const handlePost = async (event: { preventDefault: () => void }) => {
  const handlePost = async () => {
    // event.preventDefault();
    try {
      const resp = await api.post('/post', { post: newPost });
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  function handleOnchangePost(event: any, length: number) {
    setNewPost(event);
    setCount(() => length);
  }

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

          {/* <S.PostForm onSubmit={(event) => handlePost(event)}> */}
          <S.PostForm onSubmit={() => handlePost()}>
            <S.PostInput
              required
              maxLength={240}
              placeholder="Escreva Algo..."
              // onChange={(e: any) => setNewPost(e.target.value)}
              onChange={(e: any) => handleOnchangePost(e.target.value, e.target.value.length)}
            />
            <div>
              <S.InputCount>{count}</S.InputCount>
              <S.Button type="submit">
                Post
              </S.Button>
            </div>
          </S.PostForm>

          <ul>
            {isFetching && <p>carregando...</p>}
            {
              posts?.map((item: any) => {
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
//   const response = await api.get('/post');
//   const posts = response.data;
//   return {
//     props: {
//       posts
//     }
//   };
// };
