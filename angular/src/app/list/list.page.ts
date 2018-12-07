import { Component } from '@angular/core';
import {Events} from '@ionic/angular';
import {legends} from '../names/nameslist';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {
  legends: Array<string> = legends;

    constructor(events: Events) {
        events.subscribe('legend:update', (oldName, newLegendName) => {
            const updatedLegendIndex = this.legends.indexOf(oldName);
            if (updatedLegendIndex > -1) {
                this.legends[updatedLegendIndex] = newLegendName;
            }
        });
    }


    ngOnInit() {

    }
}
