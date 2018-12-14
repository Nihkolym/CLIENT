import { PetHelperComponent } from './pet-helper.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('PetHelperComponent', () => {
  let component: PetHelperComponent;
  let fixture: ComponentFixture<PetHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
