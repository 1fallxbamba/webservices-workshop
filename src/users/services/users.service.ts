import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersService {
  create(dto: CreateUserDto) {
    return { message: 'user created', data: dto };
  }

  findAll() {
    return [{ id: 1, name: 'test' }];
  }

  findOne(id: number) {
    return { id, name: 'one user' };
  }

  update(id: number, dto: UpdateUserDto) {
    return { message: 'user updated', id, data: dto };
  }

  remove(id: number) {
    return { message: 'user deleted', id };
  }
}
