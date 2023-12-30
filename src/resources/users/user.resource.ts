import { Expose, Type } from 'class-transformer';
import { Resource } from '../resource';
import { UserDto } from './user.dto';

export class UserResource extends Resource {
  @Expose()
  @Type(() => UserDto)
  data: UserDto;
}
