import { DatabaseType, DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const CliDatasource = new DataSource({
  type: 'mysql' as DatabaseType,
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'mydb',
  synchronize: false,
  entities: ['src/entities/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  namingStrategy: new SnakeNamingStrategy(),
} as DataSourceOptions);

CliDatasource.initialize();

export default CliDatasource;
