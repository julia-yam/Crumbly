import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesLayout } from './recipes-layout';

describe('RecipesLayout', () => {
  let component: RecipesLayout;
  let fixture: ComponentFixture<RecipesLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipesLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipesLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
