import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeLocalDemo } from './recipe-local-demo';

describe('RecipeLocalDemo', () => {
  let component: RecipeLocalDemo;
  let fixture: ComponentFixture<RecipeLocalDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeLocalDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeLocalDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
