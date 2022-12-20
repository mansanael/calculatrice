import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  searchValue = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeSearchValue(event:any){
    // console.log(event.target.value);
    this.searchValue = event.target.value;
    
  }

}
