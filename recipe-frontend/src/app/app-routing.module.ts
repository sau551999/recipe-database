import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent },
  { path: 'create-recipe', component: CreateRecipeComponent },
  { path: 'view-recipe/:id', component: ViewRecipeComponent },
  { path: 'edit-recipe/:id', component: EditRecipeComponent }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
