import { Component, computed, inject } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { RecipeService } from '../services/recipe.service';

@Component({
  imports: [RecipeCard],
  selector: 'app-favorite-recipes',
  styleUrl: './favorite-recipes.scss',
  templateUrl: './favorite-recipes.html',
})
export class FavoriteRecipes {
  private readonly recipeService = inject(RecipeService);

  protected readonly totalCount = computed(() => this.favoriteRecipes().length);

  protected readonly removeRecipe = (id: number): void => {
    this.recipeService.removeRecipe(id);
  }

  protected readonly favoriteRecipes = computed(() =>
    this.recipeService.recipes().filter((recipe) => recipe.isFavorite),
  );

  protected toggleFavorite(id: number): void {
    this.recipeService.toggleFavorite(id);
  }
}
