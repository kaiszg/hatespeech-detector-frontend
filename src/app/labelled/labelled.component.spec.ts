import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelledComponent } from './labelled.component';

describe('LabelledComponent', () => {
  let component: LabelledComponent;
  let fixture: ComponentFixture<LabelledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
