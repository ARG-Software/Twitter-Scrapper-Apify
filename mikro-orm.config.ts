import { Migrator } from '@mikro-orm/migrations';
import { Options, PostgreSqlDriver } from '@mikro-orm/postgresql';
import dotenv from 'dotenv';

dotenv.config();

const mikroOrmMainConfig: Options = {
  driver: PostgreSqlDriver,
  host: process.env.SUPABASE_DB_HOST,
  port: parseInt(process.env.SUPABASE_DB_PORT as string),
  dbName: process.env.SUPABASE_DB_NAME,
  user: process.env.SUPABASE_DB_ADMIN_USER,
  password: process.env.SUPABASE_DB_ADMIN_PASSWORD,
  schema: process.env.SUPABASE_DB_SCHEMA,
  entities: ['./dist/entities'], 
  entitiesTs: ['./src/entities'],
  migrations: {
    path: './src/migrations',
    pathTs: './src/migrations',
    glob: '!(*.d).{js,ts}',
    tableName: 'migrations',
  },
  extensions: [Migrator],
};

export default mikroOrmMainConfig;
