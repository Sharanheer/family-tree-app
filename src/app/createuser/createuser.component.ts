import { Component } from '@angular/core';

@Component({
    selector: 'app-createuser',
    templateUrl: './createuser.component.html'
})


export class CreateUserComponent{

    genderList : Gender[];
    selectedGender: Gender;
    value: boolean;
    personIsAlive: boolean = false;
    birthDateValue: Date;
    deathDateValue: Date;

    maritalStatus: {value: string, timestamp: Date}[] = [];
    maritalStatusOptionsList: MaritalOption[];

    nationalityStatus: {value: string, timestamp: Date}[] = [];
    countriesList: CountryOption[];

    occupationStatus: {value: string, timestamp: Date}[] = [];
    occupationList: OccupationOption[];

    locationStatus: {value: string, timestamp: Date}[] = [];
    locationList: LocationOption[];

    constructor() {
        this.genderList = [
            {name: 'Female', code: 'F'},
            {name: 'Male', code: 'M'},
            {name: 'Unknown', code: 'U'}
        ];

        this.maritalStatusOptionsList = [
            {name: 'Single', code: 'S'},
            {name: 'Engaged', code: 'E'},
            {name: 'Married', code: 'M'}
        ];

        this.countriesList = [
            {name: 'India', code: 'IND'},
            {name: 'United States', code: 'USA'},
            {name: 'Australia', code: 'AUS'}
        ]

        this.occupationList = [
            {name: 'Student', code: 'Std'},
            {name: 'Business', code: 'Bus'},
            {name: 'Farmer', code: 'Far'}
        ]

        this.locationList = [
            {name: 'Mumbai, India', code: 'Mum'},
            {name: 'Hyderabad, India', code: 'Hyd'},
            {name: 'Marwar, India', code: 'Mar'}
        ]
    }

    personAlive(){
        this.personIsAlive = !this.personIsAlive;
    }

    addNewMaritalStatus(){
        console.log("running addNewMaritalStatus method");
        this.maritalStatus.push({value: null, timestamp: null});
        console.log("maritalStatusList", this.maritalStatus);
    }

    deleteMaritalStatus(currIndex: number){
        console.log("running deleteMaritalStatus method");
        this.maritalStatus.splice(currIndex, 1);
        console.log("maritalStatusList", this.maritalStatus);
    }

    addNewNationalityStatus(){
        console.log("running addNewNationalityStatus method");
        this.nationalityStatus.push({value: null, timestamp: null});
        console.log("NationalityStatusList", this.nationalityStatus);
    }

    deleteNationalityStatus(currIndex: number){
        console.log("running deleteNationalityStatus method");
        this.nationalityStatus.splice(currIndex, 1);
        console.log("NationalityStatusList", this.nationalityStatus);
    }

    addNewOccupationStatus(){
        console.log("running addNewOccupationStatus method");
        this.occupationStatus.push({value: null, timestamp: null});
        console.log("OccupationStatusList", this.nationalityStatus);
    }

    deleteOccupationStatus(currIndex: number){
        console.log("running deleteOccupationStatus method");
        this.occupationStatus.splice(currIndex, 1);
        console.log("OccupationStatusList", this.nationalityStatus);
    }

    addNewLocationStatus(){
        console.log("running addNewLocationStatus method");
        this.locationStatus.push({value: null, timestamp: null});
        console.log("LocationStatusList", this.locationStatus);
    }

    deleteLocationStatus(currIndex: number){
        console.log("running deleteLocationStatus method");
        this.locationStatus.splice(currIndex, 1);
        console.log("LocationStatusList", this.locationStatus);
    }
}

interface Gender {
    name: string,
    code: string
}

interface MaritalOption{
    name: string,
    code: string
}

interface CountryOption{
    name: string,
    code: string
}

interface OccupationOption{
    name: string,
    code: string
}

interface LocationOption{
    name: string,
    code: string
}