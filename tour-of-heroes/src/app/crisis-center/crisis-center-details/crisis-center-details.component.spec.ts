import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisCenterDetailsComponent } from './crisis-center-details.component';

describe('CrisisCenterDetailsComponent', () => {
  let component: CrisisCenterDetailsComponent;
  let fixture: ComponentFixture<CrisisCenterDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrisisCenterDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisCenterDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
