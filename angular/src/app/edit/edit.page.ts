import { Component } from '@angular/core';
import {Events} from '@ionic/angular';
import {legends as definedLegends} from '../names/nameslist';
import EventsNames from './../../config/events-names';
import VMEditLegend from "../../view-models/VMEditLegend";

@Component({
  selector: 'app-edit',
  templateUrl: 'edit.page.html',
  styleUrls: ['edit.page.scss']
})
export class EditPage {
    legends: Array<VMEditLegend> = definedLegends.map(legend => new VMEditLegend(legend));
    newLegendName: string = '';
    lastActiveLegend: VMEditLegend = null;

    constructor(public events: Events) {

  }

  startEdit(index) {
        if (this.lastActiveLegend) {
            this.lastActiveLegend.cancelEdition();
        }
        this.lastActiveLegend = this.legends[index];
        this.newLegendName = this.legends[index].legend.name;
        this.legends[index].startEditing();
  }

  cancelEdition(index) {
        this.legends[index].cancelEdition();
        this.newLegendName = '';
  }

  updateLegendName(index) {
        const oldName = this.legends[index].legend.name;
        this.legends[index].updateLegendName(this.newLegendName);
        this.events.publish(EventsNames.legendUpdate, oldName, this.newLegendName);
  }

}


