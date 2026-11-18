import { Component, inject, signal } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  imports: [],
  selector: 'app-recipe-create',
  styleUrl: './recipe-create.scss',
  templateUrl: './recipe-create.html',
})
export class RecipeCreate {
  private readonly recipeService = inject(RecipeService);
  protected readonly isSuccessMessageVisible = signal(false);

  protected onAddRecipe(name: string): void {
    const isAdded = this.recipeService.addRecipe(name, 'images/recipe-placeholder.svg');

    if (isAdded) {
      this.isSuccessMessageVisible.set(true);
    }
  }

  protected closeSuccessMessage(): void {
    this.isSuccessMessageVisible.set(false);
  }
}
