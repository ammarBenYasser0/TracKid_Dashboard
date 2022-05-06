export interface AdminData {
  id: number;
  name: string;
  email: string;
  image: string;
  permission_id: number;
  created_at: string;
  permission: {
    id: number;
    name: string;
    description: string;
  };
}
