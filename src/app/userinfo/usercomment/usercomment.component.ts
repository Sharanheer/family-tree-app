import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-usercomment',
    templateUrl: './usercomment.component.html'
})

export class UserCommentComponent{

    @Input() usercomment: {username: string, comment: string , approved: number, denied: number};

}