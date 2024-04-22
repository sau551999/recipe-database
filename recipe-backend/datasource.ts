import { DataSource, DataSourceOptions } from 'typeorm';
export const dbdatasource: DataSourceOptions = {
    "type": "postgres",
    "host": "myrecipesdb.cj2giami4k4p.us-east-1.rds.amazonaws.com",
    "port": 5432,
    "username": "postgres",
    "password": "postgres",
    "database": "myrecipesdb",
    "entities": ["src/recipes/entities/*.entity.ts"],
    "synchronize": false,
    "migrations": [
        "src/migrations/*.ts"
      ],
      migrationsTableName: "recipe_migrations",
    
};

const dataSource = new DataSource(dbdatasource)
export default dataSource