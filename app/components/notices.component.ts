import {Component, OnInit} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {HttpService} from "../injectables/http.service";
@Component({
  selector: "oa-notices",
  templateUrl: "../templates/notice.component.html"
})
export class NoticesComponent implements OnInit {
  data: Array<Object>;
  constructor(public _httpService: HttpService) {

  }
  ngOnInit() {
    let url = "http://localhost:3000/notices";
    let params = new URLSearchParams();
    this._httpService.httpGet(url, params).subscribe(res=> {
      console.log(res);
      this.data = res;
    });
  }
}
