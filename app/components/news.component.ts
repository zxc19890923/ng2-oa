import {Component, OnInit} from "@angular/core";
import {HttpService} from "../injectables/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
  selector: "oa-news",
  templateUrl: "../templates/news.component.html"
})
export class NewsComponent implements OnInit {
  data: Array<Object>;
  constructor(public _httpService: HttpService) {

  }
  ngOnInit() {
    let url = "http://localhost:3000/news";
    let params = new URLSearchParams();
    this._httpService.httpGet(url, params).subscribe(res=> {
      console.log(res);
      this.data = res;
    });
  }

}
