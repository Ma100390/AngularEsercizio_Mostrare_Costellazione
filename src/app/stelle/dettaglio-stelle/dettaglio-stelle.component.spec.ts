import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioStelleComponent } from './dettaglio-stelle.component';

describe('DettaglioStelleComponent', () => {
  let component: DettaglioStelleComponent;
  let fixture: ComponentFixture<DettaglioStelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DettaglioStelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioStelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
