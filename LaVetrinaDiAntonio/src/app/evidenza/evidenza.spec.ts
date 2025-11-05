import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evidenza } from './evidenza';

describe('Evidenza', () => {
  let component: Evidenza;
  let fixture: ComponentFixture<Evidenza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Evidenza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evidenza);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
