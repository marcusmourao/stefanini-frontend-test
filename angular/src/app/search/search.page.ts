import { Component } from '@angular/core';
import {legends} from '../names/nameslist';

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

  search() {
    console.log(`Search: ${this.searchInput}`);
    if (this.searchInput.length === 0) {
      this.results = []
    } else {
        this.results = this.matchSearchPattern();
    }
  }

  matchSearchPattern() {
    const searchInputToLowerCase = this.searchInput.toLowerCase();
    return legends.filter(legend => legend.toLowerCase().includes(searchInputToLowerCase));
  }
}
