import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivmentsTableComponent } from './achivments-table.component';

describe('AchivmentsTableComponent', () => {
  let component: AchivmentsTableComponent;
  let fixture: ComponentFixture<AchivmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchivmentsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
