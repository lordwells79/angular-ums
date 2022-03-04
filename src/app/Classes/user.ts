import { UserInterface } from '../interfaces/UserInterface';

export class User implements UserInterface {
  id: number = 0;
  name: string = '';
  username: string = '';
  email: string = '';
  address: string = '';
  phone: string = '';
}
