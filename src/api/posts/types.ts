import { AxiosResponse } from 'axios';
import { IPost } from '../../models/posts';
// import { PaginationResponse } from './../../models/api';

export type GetPostsResponse = AxiosResponse<PaginationResponse<IPost>>;

export type AddPostResponse = AxiosResponse<PaginationResponse<IPost>>;

export type DelPostResponse = AxiosResponse<PaginationResponse<IPost>>;

export type PutPostResponse = AxiosResponse<PaginationResponse<IPost>>;

export interface PaginationResponse<T> {
  data: T[];
  id: number;
}
