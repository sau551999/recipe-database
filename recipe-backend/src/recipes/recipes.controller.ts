import { Body, Controller, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { Recipe } from './entities/recipe/recipe';
import { RecipesService } from './recipes/recipes.service';

@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {}
  
    @Get()
    async findAll(): Promise<Recipe[]> {
      return this.recipesService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Recipe | undefined> {
      const recipe = await this.recipesService.findOneById(id);
      if (!recipe) {
        throw new NotFoundException(`Recipe with ID ${id} not found`);
      }
      return recipe;
    }
  
    @Post()
    async create(@Body() recipeData: Recipe): Promise<Recipe> {
      return this.recipesService.create(recipeData);
    }
  
    @Put(':id')
    async update(@Param('id') id: number, @Body() recipeData: Recipe): Promise<Recipe> {
      const updatedRecipe = await this.recipesService.update(id, recipeData);
      if (!updatedRecipe) {
        throw new NotFoundException(`Recipe with ID ${id} not found`);
      }
      return updatedRecipe;
    }
}
