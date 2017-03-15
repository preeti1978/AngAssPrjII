import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RoutesProvider} from './app.routes';
import {RemoteService} from './remote.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesProvider
  ],
  providers: [RemoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
