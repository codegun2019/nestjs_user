import { Module } from '@nestjs/common';
import {
  TypeOrmModule,
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (): TypeOrmModuleOptions => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'mydb',
        entities: ['**/*.entity.js'],
        synchronize: false,
        migrationsRun: false,
        migrations: ['src/database/migrations/*.js'],
        namingStrategy: new SnakeNamingStrategy(),
        logging: false,
      }),
    } as TypeOrmModuleAsyncOptions),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseMysqlProviderModule {}
