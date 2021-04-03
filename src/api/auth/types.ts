export interface IRegisterUserBody {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface ILoginUserBody {
  email: string;
  password: string;
}

export interface ILoginUserResponse {
  access_token: string;
  objectId: number;
  refresh_token: string;
  status: number;
}
