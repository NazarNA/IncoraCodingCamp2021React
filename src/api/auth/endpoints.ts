import { IRegisterUserBody, ILoginUserBody, ILoginUserResponse } from './types';
import Axios from '../axios';
import { AxiosResponse } from 'axios';

export const registerUser = (body: IRegisterUserBody): Promise<any> => {
  return Axios.instance.post('/register', body);
};

export const loginUsers = (body: ILoginUserBody): Promise<AxiosResponse<ILoginUserResponse>> => {
  return Axios.instance.post('/login', body);
};
