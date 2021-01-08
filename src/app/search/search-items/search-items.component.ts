import { Component, OnInit } from '@angular/core';
import { Car } from './car.model';

@Component({
    selector: 'app-search-items',
    templateUrl: './search-items.component.html'
})


export class SearchItemsComponent implements OnInit{

    cars: Car[];

    constructor() { }

    ngOnInit() {
        this.cars = [ {vin:"vin1", year:"year1", brand:"brand1", color: "color1"}, 
                 {vin:"vin2", year:"year2", brand:"brand2", color: "color2"},
                 {vin:"vin3", year:"year3", brand:"brand3", color: "color3"},
                 {vin:"vin4", year:"year4", brand:"brand4", color: "color4"}
                ]
    }
}