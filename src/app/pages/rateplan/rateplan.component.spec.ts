import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateplanComponent } from './rateplan.component';

describe('RateplanComponent', () => {
  let component: RateplanComponent;
  let fixture: ComponentFixture<RateplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RateplanComponent]
    });
    fixture = TestBed.createComponent(RateplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
