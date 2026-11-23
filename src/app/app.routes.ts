import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetails } from './recipe-details/recipe-details';
import { FavoriteRecipes } from './favorite-recipes/favorite-recipes';
import { NotFound } from './not-found/not-found';
import { RecipesLayout } from './recipes-layout/recipes-layout';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  { path: '', pathMatch: 'full', component: Dashboard },
  { path: 'create', loadComponent: () => import('./recipe-create/recipe-create').then(m => m.RecipeCreate), canActivate: [authGuard] },
  { path: 'details/:id', component: RecipeDetails },
  { path: 'favorite', redirectTo: 'recipes/favorites', pathMatch: 'full' },
  { path: 'recipes', component: RecipesLayout, children: [
    { path: '', pathMatch: 'full', component: RecipeList },
    { path: 'favorites', component: FavoriteRecipes }
  ] },
  { path: '**', component: NotFound },
];
