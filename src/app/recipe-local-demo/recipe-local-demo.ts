import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { RecipeList } from '../recipe-list/recipe-list';
import { RecipeCreate } from '../recipe-create/recipe-create';

@Component({
  providers: [RecipeService],
  imports: [RecipeCreate, RecipeList],
  selector: 'app-recipe-local-demo',
  styleUrl: './recipe-local-demo.scss',
  templateUrl: './recipe-local-demo.html',
})
export class RecipeLocalDemo {}
