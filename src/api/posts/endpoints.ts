import { IPost } from '../../models/posts';
import { GetPostsResponse, AddPostResponse, DelPostResponse, PutPostResponse } from './types';
import Axios from './../axios';

export const getPosts = (): Promise<any> => {
  return Axios.instance.get('/posts');
};

export const postPosts = (post: IPost): Promise<any> => {
  return Axios.instance.post('/posts', post);
};

export const editPosts = (post: IPost): Promise<any> => {
  return Axios.instance.put(`/posts/${post.id}`, post);
};

export const delPosts = (id: number): Promise<any> => {
  return Axios.instance.delete(`/posts/${id}`);
};
