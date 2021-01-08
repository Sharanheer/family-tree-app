import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-search-item',
    templateUrl: './search-item.component.html'
})

export class SearchItemComponent{

    @Input('caritem') car: {vin: string, year: string, brand: string, color: string};

}