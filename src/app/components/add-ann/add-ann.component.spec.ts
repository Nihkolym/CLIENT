import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnComponent } from './add-ann.component';

describe('AddAnnComponent', () => {
  let component: AddAnnComponent;
  let fixture: ComponentFixture<AddAnnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
