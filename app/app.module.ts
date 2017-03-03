import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";
import {DatepickerModule, AlertModule, TooltipModule} from "ng2-bootstrap";
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

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
import {UserInfoComponent} from "./components/user_info.component";
import {FroalaComponent} from "./components/froala.component";
import {NewsInfoComponent} from "./components/news_info.component";
import {EditNewsComponent} from "./components/edit_news.component";
import {AddNewsComponent} from "./components/add_news.component";
import {FileComponent} from "./components/file.component";
import {ProcessComponent} from "./components/process.component";


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
    DateComponent,
    UserInfoComponent,
    FroalaComponent,
    NewsComponent,
    NewsInfoComponent,
    EditNewsComponent,
    AddNewsComponent,
    FileComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(MyRouter),
    DatepickerModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    AlertModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
