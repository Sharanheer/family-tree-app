import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {MegaMenuModule} from 'primeng/megamenu';
import {CardModule} from 'primeng/card';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ButtonModule} from 'primeng/button';
import { HomeComponent } from './home/home.component';
import { SearchUIComponent } from './home/searchUI/searchUI.component';
import { LoginUIComponent } from './home/loginUI/LoginUI.component';
import {InputTextModule} from 'primeng/inputtext';
import { AdvSearchUIComponent } from './search/adv-searchUI/adv-searchUI.component';
import { SearchComponent } from './search/search.component';
import { SearchItemsComponent } from './search/search-items/search-items.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { SearchItemComponent } from './search/search-items/search-item/search-item.component';
import { TreeComponent } from './tree/tree.component';
import { TreeNodeComponent } from './tree/treenode/treenode.component';
import { UserInfoComponent } from './userinfo/userinfo.component';
import {TimelineModule} from 'primeng/timeline';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {UserCommentComponent} from './userinfo/usercomment/usercomment.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { CreateUserComponent } from './createuser/createuser.component';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchUIComponent,
    LoginUIComponent,
    AdvSearchUIComponent,
    SearchComponent,
    SearchItemsComponent,
    SearchItemComponent,
    TreeComponent,
    TreeNodeComponent,
    UserInfoComponent,
    UserCommentComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    FormsModule,
    RouterModule,
    DropdownModule,
    MegaMenuModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    VirtualScrollerModule,
    TimelineModule,
    InputTextareaModule,
    ScrollPanelModule,
    BrowserAnimationsModule,
    CheckboxModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
