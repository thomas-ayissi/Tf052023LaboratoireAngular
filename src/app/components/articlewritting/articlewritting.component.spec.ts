import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlewrittingComponent } from './articlewritting.component';

describe('ArticlewrittingComponent', () => {
  let component: ArticlewrittingComponent;
  let fixture: ComponentFixture<ArticlewrittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlewrittingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlewrittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
