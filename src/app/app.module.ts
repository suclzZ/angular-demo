import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';/* ngModel */
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule /*使用 ngModel*/
  ],
  providers: [HeroService,MessageService],/* 在*Serrevice中使用providers:'root'出错 */
  bootstrap: [AppComponent]
})
export class AppModule { }
