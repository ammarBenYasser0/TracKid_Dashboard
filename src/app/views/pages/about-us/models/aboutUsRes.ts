export interface AboutUsRes {
  status: boolean;
  code: number;
  message: string;
  data: [{ id: number; ttitle: string; body: string }];
}
