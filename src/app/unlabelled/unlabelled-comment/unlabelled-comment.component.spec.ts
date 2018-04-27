import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlabelledCommentComponent } from './unlabelled-comment.component';

describe('UnlabelledCommentComponent', () => {
  let component: UnlabelledCommentComponent;
  let fixture: ComponentFixture<UnlabelledCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlabelledCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlabelledCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
