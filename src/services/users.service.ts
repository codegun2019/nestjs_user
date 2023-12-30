import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';
import { PaginateDto } from 'src/dtos/users/paginate.dto';
import { UserEntity } from 'src/entities/users.entity';
import { toInt } from 'src/helpers/to-int';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { get } from 'lodash';
import { CreateUserDto } from 'src/dtos/users/create.dto';

//controller -> service -> repository(entity)

@Injectable()
export class UsersService {
  [x: string]: any;
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    try {
      const newUser = this.userRepository.create(createUserDto);
      return await this.userRepository.save(newUser);
    } catch (error) {
      // Handle any potential database errors
      throw new BadRequestException('Failed to create user');
    }
  }
  async show(userId: number): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) {
      throw Error('No uSer');
    }

    return user;
  }

  async paginate(dto: PaginateDto): Promise<Pagination<UserEntity>> {
    const builder: SelectQueryBuilder<UserEntity> =
      this.userRepository.createQueryBuilder('user');

    console.log(get(dto, 'search'));

    const options: IPaginationOptions = {
      page: toInt(get(dto, 'page')),
      limit: toInt(get(dto, 'perPage')),
    };

    return paginate<UserEntity>(builder, options);
  }
  async delete(userId: number): Promise<UserEntity | null> {
    try {
      const user = await this.userRepository.findOne({ where: { id: userId } });

      if (!user) {
        throw new NotFoundException('User not found');
      }
      const deletedUser = await this.userRepository.remove(user);

      return deletedUser || null;
    } catch (error) {
      throw new BadRequestException('Failed to delete user');
    }
  }

}
