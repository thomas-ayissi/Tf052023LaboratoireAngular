import { ComponentFixture, TestBed } from '@angular/core/testing';
/*Ci-dessous les ajouts pour résoudre l'erreur*/
import { CardComponent } from './card.component';
/*Ci-dessus les ajouts pour résoudre l'erreur*/
describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
