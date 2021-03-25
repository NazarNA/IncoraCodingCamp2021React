import { PaginationResponse } from './../../models/api';
import { AxiosResponse } from 'axios';

export interface ICategory {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  icon: {
    id: number;
    class: string;
    createdAt: string;
    updatedAt: string;
  };
}

export type GetCategoriesResponse = AxiosResponse<PaginationResponse<ICategory>>;

export type PostCategoryBody = {
  name: string;
  description: string;
  iconId: number;
};
