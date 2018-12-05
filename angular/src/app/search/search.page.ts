import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class SearchPage {
  searchInput : string;
  results = [];

  ngOnInit() {
  }

  onSearch() {
    console.log(`Search: ${this.searchInput}`)
    
  }
}
