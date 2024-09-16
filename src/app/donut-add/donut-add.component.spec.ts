import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutAddComponent } from './donut-add.component';

describe('DonutAddComponent', () => {
  let component: DonutAddComponent;
  let fixture: ComponentFixture<DonutAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DonutAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonutAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
