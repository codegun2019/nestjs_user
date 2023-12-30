import { Expose, Type } from 'class-transformer';
import {  Resources } from '../resource';
import { UserDto } from './user.dto';

export class UsersResource extends Resources {
  @Expose()
  @Type(() => UserDto)
  data: UserDto[];
}
