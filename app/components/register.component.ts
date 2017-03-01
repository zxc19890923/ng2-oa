import {Component} from "@angular/core";
import {Md5} from "ts-md5/dist/md5";
import {URLSearchParams} from "@angular/http";
import {HttpService} from "../injectables/http.service";
@Component({
  selector: "oa-register",
  templateUrl: "../templates/register.component.html"
})
export class RegisterComponent {
  username:string = "";
  password:string = "";
  second_password:string = "";
  position:string = "";
  phone:number;
  email:string = "";
  sex:string;
  age:number;
  message:string = "";

  constructor(public _httpService:HttpService) {
    this.sex = "女";
  }

  registerClick() {
    if (this.password != this.second_password) {
      this.message = "两次输入密码不一致";
    }
    else {
      let url = "http://localhost:3000/register";
      let params = new URLSearchParams();
      params.set("username", this.username);
      params.set("password", Md5.hashStr(this.password).toString());
      params.set("position", this.position);
      params.set("phone", this.phone.toString());
      params.set("email", this.email);
      params.set("sex", this.sex);
      params.set("age", this.age.toString());

      console.log(params.toString());
      this._httpService.httpPost(url, params).subscribe(res=> {
        this.message = "";
        console.log(res);
        if (res.affectedRows > 0) {
          if (confirm("注册成功, 跳转到登录界面")) {
            window.location.href = "/login";
          }
        }
        else {
          this.message = "注册失败, 请刷新重试, 或者联系管理人员!";
        }
      });
    }
  }
}
