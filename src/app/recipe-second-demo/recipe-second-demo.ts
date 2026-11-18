import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeList } from '../recipe-list/recipe-list';
import { RecipeCreate } from '../recipe-create/recipe-create';

@Component({
  providers: [RecipeService],
  imports: [RecipeCreate, RecipeList],
  selector: 'app-recipe-second-demo',
  styleUrl: './recipe-second-demo.scss',
  templateUrl: './recipe-second-demo.html',
})
export class RecipeSecondDemo {}
