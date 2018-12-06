import Legend from '../models/Legend';

export default class VMEditLegend {
    private _legend: Legend;
    private _isEditing: boolean;
    constructor(legendName: string) {
        this._legend = new Legend(legendName);
        this._isEditing = false;
    }

    get legend(): Legend{
        return this._legend;
    }
    set legend(value: Legend) {
        this._legend = value;
    }

    get isEditing(): boolean {
        return this._isEditing;
    }

    set isEditing(value: boolean) {
        this._isEditing = value;
    }

    startEditing() {
        this.isEditing = true;
    }

    cancelEdition() {
        this.isEditing = false;
    }

    updateLegendName(newName: string) {
        this.legend.name = newName;
        this.isEditing = false;
    }

}
