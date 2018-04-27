import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelledCommentComponent } from './labelled-comment.component';

describe('LabelledCommentComponent', () => {
  let component: LabelledCommentComponent;
  let fixture: ComponentFixture<LabelledCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelledCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelledCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
