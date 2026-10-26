import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Dashboard } from './dashboard/dashboard';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeCreate } from './recipe-create/recipe-create';
import { RecipeDetails } from './recipe-details/recipe-details';

@Component({
  imports: [
    Header,
    Footer,
    Dashboard,
    RecipeList,
    RecipeCreate,
    RecipeDetails,
  ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  currentPage = 'home';
}