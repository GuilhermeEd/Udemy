import { RecipeService } from './recipes/recipe.service';
import { Component } from '@angular/core';

@Component({
  selector: 'recipe-book-app',
  templateUrl: 'recipe-book.component.html',
  providers: [RecipeService]
})
export class RecipeBookAppComponent {
}
