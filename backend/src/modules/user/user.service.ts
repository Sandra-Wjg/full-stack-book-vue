import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return 'get user';
  }

  getUserById(id: number) {
    return `This action returns a #${id} user`;
  }
}
