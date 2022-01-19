import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppComponent } from './doctor-app.component';

describe('DoctorAppComponent', () => {
  let component: DoctorAppComponent;
  let fixture: ComponentFixture<DoctorAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
