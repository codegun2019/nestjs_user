// create.controller.ts

import { Controller, Post, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/services/users.service';
import { CreateUserDto } from 'src/dtos/users/create.dto';
import { UserEntity } from 'src/entities/users.entity';

@Controller('users')
export class CreateUserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<UserEntity | { statusCode: HttpStatus; message: string; error: string }> {

      const newUser = await this.usersService.create(createUserDto);
      return newUser;
 
  }
}
