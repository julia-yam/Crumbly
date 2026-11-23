import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.scss',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {
  public readonly id = input.required<number>();
  public readonly title = input.required<string>();
  public readonly image = input.required<string>();
  public readonly isFavorite = input(false);
  public readonly favoriteToggle = output<void>();

  public readonly removeRecipe = output<void>();
}
