import { Component } from '@angular/core';
import { Header } from './header/header';
import { RecipeList } from './recipe-list/recipe-list';
import { Footer } from './footer/footer';

@Component({
  imports: [Header, RecipeList, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {}