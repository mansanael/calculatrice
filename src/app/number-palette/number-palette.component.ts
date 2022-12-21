import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-palette',
  templateUrl: './number-palette.component.html',
  styleUrls: ['./number-palette.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NumberPaletteComponent implements OnInit {

  result = 0;
  expression = '';

  constructor() { }

  ngOnInit(): void {
  }

  btnClicked(e:any){
    console.log(e.target.innerText);
    let value = e.target.innerText;

    if (value == '=') {
      this.result = eval(this.expression)
    } else {
      this.expression += e.target.innerText;
    }

    
        
    // } else if (value == '-'){
    //   console.log('substraction');
    // } else if(value == '/'){
    //   console.log('division');

    // }else if(value == 'x'){
    //   console.log('multiplication');
    // } else if(value == '='){
    //   console.log(this.temp);
    // }else {
    //   this.temp = parseFloat(e.target.innerText) ;
    //   console.log(eval("2+3*5"));
    // }

  }

  cancel(){
    this.expression = '';
    this.result = 0;
  }

}
