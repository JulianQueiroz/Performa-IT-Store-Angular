import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacolaCheiaComponent } from './sacola-cheia.component';

describe('SacolaCheiaComponent', () => {
  let component: SacolaCheiaComponent;
  let fixture: ComponentFixture<SacolaCheiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SacolaCheiaComponent]
    });
    fixture = TestBed.createComponent(SacolaCheiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
