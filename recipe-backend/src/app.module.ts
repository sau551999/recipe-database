import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesController } from './recipes/recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipes/entities/recipe/recipe';
import { RecipesService } from './recipes/recipes/recipes.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
  host: 'myrecipesdb.cj2giami4k4p.us-east-1.rds.amazonaws.com',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'myrecipesdb',
  synchronize: true,
  ssl: {
    rejectUnauthorized: false, // For testing purposes, set to true in production
  },
  entities: [Recipe],}),
      TypeOrmModule.forFeature([Recipe])],
  controllers: [AppController, RecipesController],
  providers: [AppService,RecipesService],
})
export class AppModule {}
