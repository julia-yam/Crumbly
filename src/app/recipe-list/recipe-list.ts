import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-recipe-list',
  styleUrl: './recipe-list.scss',
  templateUrl: './recipe-list.html',
})
export class RecipeList {
  protected recipes = [
    { id: 1, title: 'Румяные сырники с клубникой и сметаной'},
    { id: 2, title: 'Паста в сливочном соусе с помидорами и базиликом'},
    { id: 3, title: 'Яблочный пирог'},
  ];
}
