import {Routes} from "@angular/router";
import {LoginComponent} from "./login.component"
import {RegisterComponent} from "./register.component"
import {HomeComponent} from "./home.component"
import {NewsComponent} from "./news.component";
import {NoticesComponent} from "./notices.component";
import {MainComponent} from "./main.component";
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
