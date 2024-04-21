import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Recipe {
  name: string;
  ingredients: string;
  instructions: string;
}

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit{
  
  newRecipe: Recipe = { name: '', ingredients: '', instructions: '' };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createRecipe(): void {
    // For demo purpose, log the new recipe object
    console.log(this.newRecipe);

    // Here you can send an HTTP request to save the new recipe to the backend
    // For example:
    // this.recipeService.createRecipe(this.newRecipe).subscribe(response => {
    //   console.log('Recipe created successfully:', response);
    //   this.router.navigate(['/recipes']);
    // }, error => {
    //   console.error('Error creating recipe:', error);
    // });

    // For now, let's just navigate back to the Recipes list
    this.router.navigate(['/recipes']);
  }

}
