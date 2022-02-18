import { useEffect, useState } from 'react';
import Header from '../components/Header';
import * as S from '../styles/feed';
import api from '../services/api';

type Posts = {
  post: string
}

export default function Home() {
  const [post, setPost] = useState<Posts[]>([]);

  useEffect(() => {
    api.get('/post')
      .then((response: any) => {
        console.log(response);
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error: any) => {
        console.log(error);
        console.log(error.response);
      });
  }, []);

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
            {
              post.map((item: any) => {
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
