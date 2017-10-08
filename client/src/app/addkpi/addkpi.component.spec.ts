import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddkpiComponent } from './addkpi.component';

describe('AddkpiComponent', () => {
  let component: AddkpiComponent;
  let fixture: ComponentFixture<AddkpiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddkpiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
