export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar?: string;
  role: number;
  createdAt?: string;
  updatedAt?: string;
}
