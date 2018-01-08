import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSignalsComponent } from './admin-signals.component';

describe('AdminSignalsComponent', () => {
  let component: AdminSignalsComponent;
  let fixture: ComponentFixture<AdminSignalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSignalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
