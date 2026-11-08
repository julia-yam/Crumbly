import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoriteFilter } from './favorite-filter';

describe('FavoriteFilter', () => {
  let component: FavoriteFilter;
  let fixture: ComponentFixture<FavoriteFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteFilter],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
