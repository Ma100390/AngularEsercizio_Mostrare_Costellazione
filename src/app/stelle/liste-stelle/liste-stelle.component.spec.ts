import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeStelleComponent } from './liste-stelle.component';

describe('ListeStelleComponent', () => {
  let component: ListeStelleComponent;
  let fixture: ComponentFixture<ListeStelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeStelleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeStelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
