import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseMysqlProviderModule } from './providers/database/mysql/provider.module';
import { UserEntity } from './entities/users.entity';
import UserControllers from './controllers/users';
import { UsersService } from './services/users.service';
import AuthControllers from './controllers/auth';

@Module({
  imports: [
    DatabaseMysqlProviderModule,
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [...UserControllers, ...AuthControllers],
  providers: [UsersService],
})
export class AppModule {}
