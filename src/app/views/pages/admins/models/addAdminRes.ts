export interface AddAdminRes {
  status: boolean;
  code: number;
  message: string;
  data: {
    name: string;
    email: string;
    permission_id: string;
    created_at: string;
    id: number;
  };
  error?: {};
}
