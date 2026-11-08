import { Component, model } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-favorite-filter',
  styleUrl: './favorite-filter.scss',
  templateUrl: './favorite-filter.html',
})
export class FavoriteFilter {
  public readonly showOnlyFavorites = model(false);
}
