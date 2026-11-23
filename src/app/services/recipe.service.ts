import { Injectable, signal, computed, inject } from '@angular/core';
import type { Recipe } from '../recipe-list/recipe-list';
import { RECIPE_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly _recipes = signal<Recipe[]>([
    {
      id: 1,
      title: 'Румяные сырники с клубникой и сметаной',
      isFavorite: false,
      image: 'images/syrniki.png',
      description: 'Нежные сырники с румяной корочкой, свежей клубникой и сметаной.',
      cookingTime: 25,
      servings: 2,
      category: 'Завтрак',
      ingredients: ['Творог — 200 г', 'Яйцо — 1 шт.', 'Мука — 2 ст. л. и немного для обваливания', 'Сахар — 1 ст. л.', 'Растительное масло — для жарки', 'Клубника и сметана — для подачи'],
      steps: ['Смешай творог, яйцо, муку и сахар.', 'Сформируй небольшие сырники и обваляй их в муке.', 'Обжарь на небольшом огне с двух сторон до золотистой корочки и готовности внутри.', 'Подавай с клубникой и сметаной.'],
    },
    {
      id: 2,
      title: 'Паста в сливочном соусе с помидорами и базиликом',
      isFavorite: false,
      image: 'images/pasta.png',
      description: 'Паста с нежным сливочным соусом, сочными помидорами и ароматным базиликом.',
      cookingTime: 30,
      servings: 2,
      category: 'Основное блюдо',
      ingredients: ['Паста — 200 г', 'Помидоры черри — 150 г', 'Сливки 20% — 150 мл', 'Чеснок — 1 зубчик', 'Оливковое масло — 1 ст. л.', 'Базилик — несколько листьев', 'Соль и перец — по вкусу'],
      steps: ['Отвари пасту по инструкции на упаковке, сохрани немного воды от варки.', 'Нарежь помидоры пополам, измельчи чеснок.', 'Слегка обжарь чеснок на масле, добавь помидоры и готовь 5 минут.', 'Влей сливки, добавь соль и перец, прогрей соус.', 'Смешай пасту с соусом, при необходимости добавь немного воды от варки и укрась базиликом.'],
    },
    {
      id: 3,
      title: 'Яблочный пирог',
      isFavorite: false,
      image: 'images/apple-pie.png',
      description: 'Домашний яблочный пирог с воздушным тестом и лёгким ароматом корицы.',
      cookingTime: 60,
      servings: 6,
      category: 'Выпечка',
      ingredients: ['Яблоки — 3 шт.', 'Яйца — 3 шт.', 'Мука — 150 г', 'Сахар — 120 г', 'Разрыхлитель — 1 ч. л.', 'Корица — по вкусу', 'Сливочное масло — для формы'],
      steps: ['Разогрей духовку до 180 °C и смажь форму маслом.', 'Нарежь яблоки, удалив сердцевину.', 'Взбей яйца с сахаром до пышной светлой массы.', 'Аккуратно вмешай муку с разрыхлителем и корицей, затем добавь яблоки.', 'Переложи тесто в форму и выпекай 35–45 минут. Проверь готовность деревянной шпажкой.', 'Дай пирогу немного остыть перед подачей.'],
    },
  ]);

  private readonly config = inject(RECIPE_CONFIG);

  readonly recipes = this._recipes.asReadonly();

  removeRecipe(id: number): void {
    this._recipes.update((recipes) => recipes.filter((recipe) => recipe.id !== id));
  }

  addRecipe(name: string, image: string): boolean {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return false;
    }

    if (this._recipes().length >= this.config.maxRecipes) {
      return false;
    }

    this._recipes.update((recipes) => {
      const maxId = Math.max(0, ...recipes.map((recipe) => recipe.id));

      const newRecipe: Recipe = {
        id: maxId + 1,
        title: trimmedName,
        isFavorite: false,
        image,
        description: '',
        cookingTime: null,
        servings: null,
        category: '',
        ingredients: [],
        steps: [],
      };

      return [...recipes, newRecipe];
    });

    return true;
  }

  toggleFavorite(id: number): void {
    this._recipes.update((recipes) =>
      recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe,
      ),
    );
  }

  readonly favoriteCount = computed(
    () => this._recipes().filter((recipe) => recipe.isFavorite).length,
  );
}
