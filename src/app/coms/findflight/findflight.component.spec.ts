import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindflightComponent } from './findflight.component';

describe('FindflightComponent', () => {
  let component: FindflightComponent;
  let fixture: ComponentFixture<FindflightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindflightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
