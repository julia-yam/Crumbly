import { ApplicationConfig, provideBrowserGlobalErrorListeners, InjectionToken } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

interface RecipeConfig { maxRecipes: number; }

export const RECIPE_CONFIG = new InjectionToken<RecipeConfig>('RecipeConfig');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: RECIPE_CONFIG, useValue: { maxRecipes: 5 } }
  ]
};
