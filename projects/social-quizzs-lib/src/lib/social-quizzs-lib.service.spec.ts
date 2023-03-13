import { TestBed } from '@angular/core/testing';

import { SocialQuizzsLibService } from './social-quizzs-lib.service';

describe('SocialQuizzsLibService', () => {
  let service: SocialQuizzsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialQuizzsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
