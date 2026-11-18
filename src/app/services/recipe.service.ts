import { Injectable, signal, computed, inject } from '@angular/core';
import type { Recipe } from '../recipe-list/recipe-list';
import { RECIPE_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly _recipes = signal<Recipe[]>([
    {
      id: 1,
      title: 'Румяные сырники с клубникой и сметаной',
      isFavorite: false,
      image: 'images/syrniki.png',
    },
    {
      id: 2,
      title: 'Паста в сливочном соусе с помидорами и базиликом',
      isFavorite: false,
      image: 'images/pasta.png',
    },
    {
      id: 3,
      title: 'Яблочный пирог',
      isFavorite: false,
      image: 'images/apple-pie.png',
    },
  ]);

  private readonly config = inject(RECIPE_CONFIG);

  readonly recipes = this._recipes.asReadonly();

  removeRecipe(id: number): void {
    this._recipes.update((recipes) => recipes.filter((recipe) => recipe.id !== id));
  }

  addRecipe(name: string, image: string): boolean {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return false;
    }

    if (this._recipes().length >= this.config.maxRecipes) {
      return false;
    }

    this._recipes.update((recipes) => {
      const maxId = Math.max(0, ...recipes.map((recipe) => recipe.id));

      const newRecipe: Recipe = {
        id: maxId + 1,
        title: trimmedName,
        isFavorite: false,
        image,
      };

      return [...recipes, newRecipe];
    });

    return true;
  }

  toggleFavorite(id: number): void {
    this._recipes.update((recipes) =>
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe,
      ),
    );
  }

  readonly favoriteCount = computed(
    () => this._recipes().filter((recipe) => recipe.isFavorite).length,
  );
}
