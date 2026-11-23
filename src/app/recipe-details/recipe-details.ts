import { Component, inject, computed, input } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  imports: [],
  selector: 'app-recipe-details',
  styleUrl: './recipe-details.scss',
  templateUrl: './recipe-details.html',
})
export class RecipeDetails {
  readonly recipeId = input(0, {
    alias: 'id',
    transform: (value: string | undefined) => Number(value ?? 0),
  });
  private readonly recipeService = inject(RecipeService);
  readonly computedRecipe = computed(() =>
    this.recipeService.recipes().find((recipe) => recipe.id === this.recipeId())
  );
  protected toggleFavorite(id: number): void {
    this.recipeService.toggleFavorite(id);
  }
}
