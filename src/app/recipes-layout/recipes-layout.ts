import { Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { RecipeService } from '../services/recipe.service';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-recipes-layout',
  styleUrl: './recipes-layout.scss',
  templateUrl: './recipes-layout.html',
})
export class RecipesLayout {
  private readonly router = inject(Router);
  private readonly recipeService = inject(RecipeService);
  private readonly url = toSignal(this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map((event) => event.urlAfterRedirects),
  ), { initialValue: this.router.url });

  readonly sort = input<string>();
  protected readonly isFavorites = computed(() =>
    this.url().split('?')[0].split('#')[0] === '/recipes/favorites');
  protected readonly currentPath = computed(() =>
    this.isFavorites() ? '/recipes/favorites' : '/recipes');
  protected readonly count = computed(() => this.isFavorites()
    ? this.recipeService.favoriteCount()
    : this.recipeService.recipes().length);
}
