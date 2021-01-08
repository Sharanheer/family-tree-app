import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {MegaMenuItem} from 'primeng/api';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    items: MenuItem[];
    itemsMegaMenu: MegaMenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home', icon: 'pi pi-fw pi-home',
            },
            {
                label: 'About', icon: 'pi pi-fw pi-info-circle',
            }
        ];

        this.itemsMegaMenu = [
          {
              label: 'Account', icon: 'pi pi-fw pi-user',
              items: [
                  [
                      {
                          label: 'Info'
                      },
                      {
                          label: 'SignIn/Signup'
                      }
                  ],
                  
              ]
          }
        ]
    }
}