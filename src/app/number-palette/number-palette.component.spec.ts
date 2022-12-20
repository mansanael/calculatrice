import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPaletteComponent } from './number-palette.component';

describe('NumberPaletteComponent', () => {
  let component: NumberPaletteComponent;
  let fixture: ComponentFixture<NumberPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberPaletteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
