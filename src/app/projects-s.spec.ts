import { TestBed } from '@angular/core/testing';

import { ProjectsS } from './projects-s';

describe('ProjectsS', () => {
  let service: ProjectsS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
