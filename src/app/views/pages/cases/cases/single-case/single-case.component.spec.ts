import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCaseComponent } from './single-case.component';

describe('SingleCaseComponent', () => {
  let component: SingleCaseComponent;
  let fixture: ComponentFixture<SingleCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
