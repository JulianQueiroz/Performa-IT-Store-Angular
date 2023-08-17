import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoSacolasComponent } from './cabecalho-sacolas.component';

describe('CabecalhoSacolasComponent', () => {
  let component: CabecalhoSacolasComponent;
  let fixture: ComponentFixture<CabecalhoSacolasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabecalhoSacolasComponent]
    });
    fixture = TestBed.createComponent(CabecalhoSacolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
