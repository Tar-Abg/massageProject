import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageCustomersComponent } from './massage-customers.component';

describe('MassageCustomersComponent', () => {
  let component: MassageCustomersComponent;
  let fixture: ComponentFixture<MassageCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassageCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassageCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
