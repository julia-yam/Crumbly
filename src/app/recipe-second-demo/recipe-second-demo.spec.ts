import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeSecondDemo } from './recipe-second-demo';

describe('RecipeSecondDemo', () => {
  let component: RecipeSecondDemo;
  let fixture: ComponentFixture<RecipeSecondDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeSecondDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeSecondDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
