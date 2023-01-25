export type User = {
  id: number;
  name?: string;
};
export type Room = {
  id: unique;
  key: number;
  name?: string;
  users: User
};
