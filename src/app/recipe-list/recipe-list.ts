import { Component, computed, inject, effect } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { RecipeService } from '../services/recipe.service';

export interface Recipe {
  id: number;
  title: string;
  isFavorite: boolean;
  image: string;
}
@Component({
  imports: [RecipeCard],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.scss',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  private readonly recipeService = inject(RecipeService);

  protected recipes = this.recipeService.recipes;
  protected readonly totalCount = computed(() => this.recipes().length);

  protected readonly favoriteCount = this.recipeService.favoriteCount;

  protected readonly removeRecipe = (id: number): void => {
    this.recipeService.removeRecipe(id);
  }

  constructor() {
    effect(() => {
      console.log('Рецептов в избранном:', this.favoriteCount());
    });
  }

  protected toggleFavorite(id: number): void {
    this.recipeService.toggleFavorite(id);
  }

}
