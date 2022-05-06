export interface GetAdminsRes {
  statues: boolean;
  code: number;
  data: {
    current_page: number;
    data: [
      {
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
    ];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };
}
