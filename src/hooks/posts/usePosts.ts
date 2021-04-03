import useSWR, { cache } from 'swr';
import { IPost } from '../../models/posts';
import { getPosts, postPosts, editPosts, delPosts } from '../../api/posts';

export const usePosts = () => {
  const { data, error, mutate } = useSWR('/posts', () => getPosts().then(res => res.data));

  console.log(data, 'SWR data');

  const addPost = async (post: IPost) => {
    const res = await postPosts(post);
    const cached: any = cache.get('/posts');

    console.log('cached', cached);

    mutate([{ ...post, id: Date.now() }, ...cached], false);

    console.log('res', res);
  };

  const redactPost = async (post: IPost) => {
    const res = await postPosts(post);
    const cached: any = cache.get('/posts');

    console.log('cached', cached);

    mutate(
      cached.map((el: IPost) => (post.id === el.id ? { ...el, ...post } : el)),
      false
    );

    console.log('res', res);
  };

  const removePost = async (id: number) => {
    const cached: any = cache.get('/posts');

    mutate(
      cached.filter((post: IPost) => post.id !== id),
      false
    );

    const res = await delPosts(id);
  };

  return {
    data,
    loading: !data && !error,
    redactPost,
    removePost,
    addPost
  };
};
