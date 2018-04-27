import { TestBed, inject } from '@angular/core/testing';

import { UnlabelledCommentsService } from './unlabelled-comments.service';

describe('UnlabelledCommentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnlabelledCommentsService]
    });
  });

  it('should be created', inject([UnlabelledCommentsService], (service: UnlabelledCommentsService) => {
    expect(service).toBeTruthy();
  }));
});
