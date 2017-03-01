import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {DatepickerModule} from "ng2-bootstrap";

import {AppComponent} from './components/app.component';
import {SizeDirective} from "./directives/size.directive";
import {MyRouter} from "./components/router.component";
import {LoginComponent} from "./components/login.component";
import {RegisterComponent} from "./components/register.component";
import {HomeComponent} from "./components/home.component";
import {NoticesComponent} from "./components/notices.component";
import {NewsComponent} from "./components/news.component";
import {MainComponent} from "./components/main.component";
import {DateComponent} from "./components/date.component";
import {HttpService} from "./injectables/http.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SizeDirective,
    NoticesComponent,
    NewsComponent,
    MainComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MyRouter),
    DatepickerModule.forRoot()
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
