import {Component, OnInit} from "@angular/core";
import {HttpService} from "../injectables/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
  selector: "oa-user-info",
  templateUrl: "../templates/user_info.component.html"
})
export class UserInfoComponent implements OnInit {
  data: Array<Object>;
  constructor(public _httpService: HttpService) {

  }
  ngOnInit() {
    let id = sessionStorage.getItem("id");
    let url = "http://localhost:3000/user_info";
    let params = new URLSearchParams();
    params.set("id", id);
    this._httpService.httpPost(url, params).subscribe(res=> {
      console.log(res);
      this.data = res;
    });
  }
}
