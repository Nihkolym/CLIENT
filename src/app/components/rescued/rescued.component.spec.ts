import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RescuedComponent } from './rescued.component';

describe('RescuedComponent', () => {
  let component: RescuedComponent;
  let fixture: ComponentFixture<RescuedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RescuedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RescuedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
