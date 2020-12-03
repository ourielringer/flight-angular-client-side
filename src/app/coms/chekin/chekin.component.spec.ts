import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekinComponent } from './chekin.component';

describe('ChekinComponent', () => {
  let component: ChekinComponent;
  let fixture: ComponentFixture<ChekinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
