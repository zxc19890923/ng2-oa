import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {URLSearchParams} from "@angular/http";
import {HttpService} from "../injectables/http.service";
@Component({
  selector: "oa-news-info",
  templateUrl: "../templates/news_info.component.html"
})
export class NewsInfoComponent implements OnInit{
  data: Array<Object>;
  constructor(public _activeRoute: ActivatedRoute, public _httpService: HttpService) {

  }
  ngOnInit() {
    let id = this._activeRoute.snapshot.params["id"];
    let url = "http://localhost:3000/news_info";
    let params = new URLSearchParams();
    params.set("id", id);
    this._httpService.httpGet(url, params).subscribe(res=> {
      console.log(res);
      this.data = res;
    });
  }
}
