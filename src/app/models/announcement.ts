import { IOrganisation } from './organisation';
import { IUser } from './User';

export interface IAnnouncement {
  id?: number;
  title: string;
  photo: string;
  geolocation: string;
  description: string;
  status: number;
  organizationId: number;
  ownerId: number;
  organization?: IOrganisation;
  owner?: IUser;
}
