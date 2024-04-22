import { Injectable } from '@nestjs/common';
import { Recipe } from '../entities/recipe/recipe';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RecipesService {
    
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  async findOneById(id: number): Promise<Recipe | undefined> {
    return this.recipeRepository.findOne({ where: { id } });
  }

  async create(recipeData: Recipe): Promise<Recipe> {
    const newRecipe = this.recipeRepository.create(recipeData);
    return this.recipeRepository.save(newRecipe);
  }

  async update(id: number, recipeData: Recipe): Promise<Recipe> {
    await this.findOneById( id );
    await this.recipeRepository.update(id, recipeData);
    return this.findOneById(id);
  }
    
}
