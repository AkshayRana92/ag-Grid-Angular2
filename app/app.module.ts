import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AgGridModule} from 'ag-grid-ng2/main';
import { AppComponent }  from './app.component';
import {FriendsService} from "./friends.service";


@NgModule({
    imports:      [ BrowserModule, AgGridModule.forRoot() ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ FriendsService ]
})
export class AppModule { }
