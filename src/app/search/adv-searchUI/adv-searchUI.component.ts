import { Component } from '@angular/core';

@Component({
    selector: 'app-adv-searchUI',
    templateUrl: './adv-searchUI.component.html'
})

export class AdvSearchUIComponent{

    showAdvancedSearchOption: boolean = false;

    onAdvancedClick(event: Event){
        this.showAdvancedSearchOption = !this.showAdvancedSearchOption;
    }
}