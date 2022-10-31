import { TestBed } from '@angular/core/testing';

import { MenusidebarService } from './menusidebar.service';

describe('MenusidebarService', () => {
  let service: MenusidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenusidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
