import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';

@Component({
    selector: 'app-userinfo',
    templateUrl: './userinfo.component.html',
    styleUrls: ['./userinfo.component.css']
})

export class UserInfoComponent implements OnInit{
    

    // events: any[];
    lifeStatusEvents: any[];
    maritalStatusEvents: any[];
    nationalityEvents: any[];
    occupationEvents: any[];
    locationEvents: any[];

    userComments: any[];
    
    ngOnInit() {


        this.lifeStatusEvents = [
            {status: 'Birth', date: '02/09/1993'},
            {status: 'Alive', date: 'Current'},
        ]

        this.maritalStatusEvents = [
            {status: 'Single', date: '02/09/1993'},
            {status: 'Engaged', date: '05/09/2016'},
            {status: 'Married', date: '26/02/2020'}
        ]

        this.nationalityEvents = [
            {status: 'INDIAN', date: '02/09/1993'},
        ]

        this.occupationEvents = [
            {status: 'Student', date: '02/09/1993'},
            {status: 'Engineer', date: '06/2015'}
        ]
        
        this.locationEvents = [
            {status: 'Mumbai, INDIA', date: '02/09/1993'},
            {status: 'Chicago, USA', date: '09/08/2017'},
            {status: 'Herndon, USA', date: '23/09/2019'}
        ]
        
        this.userComments = [
            {username: 'test1', comment: "the UI looks good with clear info the UI looks good with clear info the UI looks good with clear info the UI looks good with clear info the UI looks good with clear info the UI looks good with clear info the UI looks good with clear the UI looks good with clear info the UI looks good with clear info the UI looks good with clear", approved: 2, denied: 1},
            {username: 'test2', comment: "the UI looks good with clear info", approved: 4, denied: 2}
        ]

        // this.events = [
        //     {status: 'Ordered', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
        //     {status: 'Processing', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
        //     {status: 'Shipped', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
        //     {status: 'Delivered', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
        // ];
    }

}