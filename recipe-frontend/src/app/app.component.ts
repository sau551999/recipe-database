import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItems = [
    { label: 'Recipes', routerLink: '/recipes' },
    { label: 'Create Recipe', routerLink: '/create-recipe' },
    { label: 'View Recipe', routerLink: '/view-recipe' },
    { label: 'Edit Recipe', routerLink: '/edit-recipe' },
    // Add more menu items as needed
  ];
}
