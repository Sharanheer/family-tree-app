import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-treenode',
    templateUrl: './treenode.component.html',
    styleUrls: ['./treenode.component.css']
})
export class TreeNodeComponent{
    @Input() userId: string;
    
    isSpouse: boolean = false;
    userfirstName: string;
    userlastName: string;
    spousefirstName: string;
    spouselastName: string;


    ngOnInit(){
        //take the userId and find it's firstName and lastName (spouse firstname and lastname) and the array of child node id's.
        this.isSpouse = true;
        
        this.userfirstName = "Sharanheer";
        this.userlastName = "Choudhari";
        this.spousefirstName = "Khushboo";
        this.spouselastName = "Solanki";
        
        
    }

}