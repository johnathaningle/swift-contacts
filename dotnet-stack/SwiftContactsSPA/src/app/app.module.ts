import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardMessagesComponent } from './dashboard-messages/dashboard-messages.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { ModelsEmailComponent } from './models-email/models-email.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      DashboardComponent,
      SidebarComponent,
      DashboardMessagesComponent,
      DashboardHomeComponent,
      ModelsEmailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgbModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
