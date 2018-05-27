import { TestBed, inject } from '@angular/core/testing';

import { LabelledCommentsService } from './labelled-comments.service';

describe('LabelledCommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabelledCommentsService]
    });
  });

  it('should be created', inject([LabelledCommentsService], (service: LabelledCommentsService) => {
    expect(service).toBeTruthy();
  }));
});
