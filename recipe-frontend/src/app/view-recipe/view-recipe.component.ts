import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Recipe {
  id?: number;
  name: string;
  ingredients: string;
  instructions: string;
}

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent {
  
  recipe: Recipe | undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Get the recipe ID from the route parameters
    const id = this.route.snapshot.paramMap.get('id');

    // For demo purpose, I'm using static data here
    // You should fetch the recipe details from your backend using this ID
    // For example, you can call a service method to fetch recipe by ID
    // this.recipeService.getRecipeById(id).subscribe((recipe: Recipe) => {
    //   this.recipe = recipe;
    // });
    
    // Static data (replace with your backend call)
    if (id) {
      this.recipe = { 
        id: parseInt(id), 
        name: 'Pasta', 
        ingredients: 'Pasta, Sauce, Cheese', 
        instructions: 'Cook pasta, add sauce, sprinkle cheese.' 
      };
    }
  }

  // Function to navigate back to Recipes list
  goBack(): void {
    this.router.navigate(['/recipes']);
  }

}
