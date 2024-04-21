import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Recipe {
  id?: number;
  name: string;
  ingredients: string;
  instructions: string;
}

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipe: Recipe = { id: 0, name: '', ingredients: '', instructions: '' };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // For demo purpose, I'm using static data here
    // You should fetch the recipe details from your backend using this ID
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Assuming this.recipeService.getRecipeById(id) fetches the recipe details from backend
      // this.recipeService.getRecipeById(id).subscribe((recipe: Recipe) => {
      //   this.recipe = recipe;
      // });
      
      // Static data (replace with your backend call)
      this.recipe = { 
        id: parseInt(id), 
        name: 'Pasta', 
        ingredients: 'Pasta, Sauce, Cheese', 
        instructions: 'Cook pasta, add sauce, sprinkle cheese.' 
      };
    }
  }

  saveRecipe(): void {
    // For demo purpose, log the edited recipe object
    console.log(this.recipe);

    // Here you can send an HTTP request to update the edited recipe to the backend
    // For example:
    // this.recipeService.updateRecipe(this.recipe).subscribe(response => {
    //   console.log('Recipe updated successfully:', response);
    //   this.router.navigate(['/recipes']);
    // }, error => {
    //   console.error('Error updating recipe:', error);
    // });

    // For now, let's just navigate back to the Recipes list
    this.router.navigate(['/recipes']);
  }
}