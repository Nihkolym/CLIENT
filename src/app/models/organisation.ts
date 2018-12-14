export interface IOrganisation {
  id?: number;
  email: string;
  password: string;
  name: string;
  phone: string;
  description?: string;
  logo?: string;
  address?: string;
  role: number;
  active: number;
  certificate: string;
}
