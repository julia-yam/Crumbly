import { Component, input, output } from '@angular/core';

export type Page = 'home' | 'recipes' | 'create' | 'details' | 'favorite' | 'local-demo' | 'second-demo';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  readonly currentPage = input.required<Page>();
  readonly pageChange = output<Page>();
}
