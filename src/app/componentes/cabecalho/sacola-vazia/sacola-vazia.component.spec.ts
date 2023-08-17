import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacolaVaziaComponent } from './sacola-vazia.component';

describe('SacolaVaziaComponent', () => {
  let component: SacolaVaziaComponent;
  let fixture: ComponentFixture<SacolaVaziaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SacolaVaziaComponent]
    });
    fixture = TestBed.createComponent(SacolaVaziaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
