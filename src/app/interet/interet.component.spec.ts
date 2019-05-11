import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteretComponent } from './interet.component';

describe('InteretComponent', () => {
  let component: InteretComponent;
  let fixture: ComponentFixture<InteretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
