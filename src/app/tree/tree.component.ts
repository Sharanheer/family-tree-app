import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit{

    @Input() userId: string;

    parentId = "parent123";
    // spouseId = "parent123";
    childArray = ["parent123", "parent123"];
    siblingArray = ["parent123", "parent456", "parent456", "parent456"];

    ngOnInit(){
        //take the userId and find parentId, siblingsid array and childid array and initialize the above fields.
        
        //if a user doesn't have any child nodes then fetch the above info for the parent as the userId.
    }
    
}