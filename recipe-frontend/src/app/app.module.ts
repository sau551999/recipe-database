import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar'; 
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    CreateRecipeComponent,
    ViewRecipeComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    MenubarModule,
    PanelModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
