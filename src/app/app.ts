import { Component, signal } from '@angular/core';
import { Header, Page } from './header/header';
import { Footer } from './footer/footer';
import { Dashboard } from './dashboard/dashboard';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeCreate } from './recipe-create/recipe-create';
import { RecipeDetails } from './recipe-details/recipe-details';
import { FavoriteRecipes } from './favorite-recipes/favorite-recipes';
import { RecipeLocalDemo } from './recipe-local-demo/recipe-local-demo';
import {RecipeSecondDemo} from './recipe-second-demo/recipe-second-demo';

@Component({
  imports: [
    Header,
    Footer,
    Dashboard,
    RecipeList,
    RecipeCreate,
    RecipeDetails,
    FavoriteRecipes,
    RecipeLocalDemo,
    RecipeSecondDemo,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly currentPage = signal<Page>('home');
}
