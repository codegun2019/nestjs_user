// delete.controller.ts

import { Controller, Delete, Param, HttpStatus } from '@nestjs/common';
import { UserEntity } from 'src/entities/users.entity';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class DeleteUserController {
  constructor(private readonly usersService: UsersService) {}

  @Delete(':id')
  async delete(@Param('id') userId: number): Promise<{ statusCode: HttpStatus; message: string; error?: string } | UserEntity> {
      const deletedUser = await this.usersService.delete(userId);
      return deletedUser;
  }

}
