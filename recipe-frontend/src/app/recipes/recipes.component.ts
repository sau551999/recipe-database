import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string;
  instructions: string;
}


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    { id: 1, name: 'Pasta', ingredients: 'Pasta, Sauce, Cheese', instructions: 'Cook pasta, add sauce, sprinkle cheese.' },
    { id: 2, name: 'Pizza', ingredients: 'Dough, Sauce, Cheese, Toppings', instructions: 'Roll dough, spread sauce, add toppings, bake.' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deleteRecipe(id: number): void {
    // For demo purpose, log the deleted recipe ID
    console.log('Deleting recipe with ID:', id);

    // Here you can send an HTTP request to delete the recipe from the backend
    // For example:
    // this.recipeService.deleteRecipe(id).subscribe(response => {
    //   console.log('Recipe deleted successfully:', response);
    //   // Refresh recipes list or remove the deleted recipe from the array
    //   this.recipes = this.recipes.filter(recipe => recipe.id !== id);
    // }, error => {
    //   console.error('Error deleting recipe:', error);
    // });

    // For now, let's just remove the recipe from the array
    this.recipes = this.recipes.filter(recipe => recipe.id !== id);
  }
}
