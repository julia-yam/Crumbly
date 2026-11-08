import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-recipe-card',
  styleUrl: './recipe-card.scss',
  templateUrl: './recipe-card.html',
})
export class RecipeCard {
  public readonly title = input.required<string>();
  public readonly image = input.required<string>();
  public readonly isFavorite = input(false);
  public readonly favoriteToggle = output<void>();
}
