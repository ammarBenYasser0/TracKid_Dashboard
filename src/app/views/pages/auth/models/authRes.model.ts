export interface authRes {
  status: string;
  code: number;
  message: string;
  data: {
    access_token: string;
    token_type: string;
    user_data: {
      id: number;
      name: string;
      email: string;
      img: string;
      permission: {};
    };
  };
  error?: { email?: string; password: string };
}
