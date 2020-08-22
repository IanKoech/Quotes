import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteDetailsDisplayComponent } from './quote-details-display.component';

describe('QuoteDetailsDisplayComponent', () => {
  let component: QuoteDetailsDisplayComponent;
  let fixture: ComponentFixture<QuoteDetailsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteDetailsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDetailsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
