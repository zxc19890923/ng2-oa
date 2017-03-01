import {Component} from "@angular/core";
import {HttpService} from "../injectables/http.service";
import {URLSearchParams} from "@angular/http";
import {Md5} from "ts-md5/dist/md5";
@Component({
  selector: "oa-login",
  templateUrl: "../templates/login.component.html"
})
export class LoginComponent {
  username:string;
  password:string;
  message:string;

  constructor(public _httpService:HttpService) {

  }

  loginClick() {
    if (this.username == "" || this.password == "") {
      this.message = "用户名和密码不能为空";
    }
    else {
      let url = "http://localhost:3000/login";
      let params = new URLSearchParams();
      params.set("username", this.username);
      params.set("password", Md5.hashStr(this.password).toString());
      this._httpService.httpPost(url, params).subscribe(res=> {
        console.log(res);
        if (res.length > 0) {
          sessionStorage.setItem("username", res[0].username);
          sessionStorage.setItem("id", res[0].id);
          window.location.href = "/home";
        }
        else {
          this.message = "用户名和密码不匹配";
        }
      });
    }
  }
}
