import {Routes} from "@angular/router";
import {LoginComponent} from "./login.component"
import {RegisterComponent} from "./register.component"
import {HomeComponent} from "./home.component"
import {NewsComponent} from "./news.component";
import {NoticesComponent} from "./notices.component";
import {MainComponent} from "./main.component";
import {NewsInfoComponent} from "./news_info.component";
import {EditNewsComponent} from "./edit_news.component";
import {AddNewsComponent} from "./add_news.component";
export const MyRouter:Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "main",
        component: MainComponent
      },
      {
        path: "news",
        component: NewsComponent
      },
      {
        path: "news/:id",
        component: NewsInfoComponent
      },
      {
        path: "edit/:id",
        component: EditNewsComponent
      },
      {
        path: "add_news",
        component: AddNewsComponent
      },
      {
        path: "notices",
        component: NoticesComponent
      },
      {
        path: '**', redirectTo: "main"
      }
    ]
  },
  {
    path: '**', redirectTo: "login"
  }
];
