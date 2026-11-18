import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteRecipes } from './favorite-recipes';

describe('FavoriteRecipes', () => {
  let component: FavoriteRecipes;
  let fixture: ComponentFixture<FavoriteRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteRecipes],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteRecipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
