import { Component, computed, effect, signal } from '@angular/core';
import { RecipeCard } from '../recipe-card/recipe-card';
import { FavoriteFilter } from '../favorite-filter/favorite-filter';

@Component({
  imports: [RecipeCard, FavoriteFilter],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.scss',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected recipes = signal([
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

  protected readonly showOnlyFavorites = signal(false);

  protected readonly totalCount = computed(() => this.recipes().length);

  protected readonly favoriteCount = computed(
    () => this.recipes().filter((recipe) => recipe.isFavorite).length,
  );

  protected readonly visibleRecipes = computed(() =>
    this.showOnlyFavorites()
      ? this.recipes().filter((recipe) => recipe.isFavorite)
      : this.recipes(),
  );

  constructor() {
    effect(() => {
      console.log('Рецептов в избранном:', this.favoriteCount());
    });
  }

  protected toggleFavorite(id: number): void {
    this.recipes.update((recipes) =>
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe,
      ),
    );
  }
}
