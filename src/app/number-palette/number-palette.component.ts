import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-palette',
  templateUrl: './number-palette.component.html',
  styleUrls: ['./number-palette.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberPaletteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
