import {Component, OnInit} from "@angular/core";
import {URLSearchParams} from "@angular/http";
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../injectables/http.service";
@Component({
  selector: "oa-edit-news",
  templateUrl: "../templates/edit_news.component.html"
})
export class EditNewsComponent implements OnInit {
  title:string;
  content:string;
  author:string;
  time:string;

  show:boolean;
  msg: string;

  constructor(public _activeRoute:ActivatedRoute, public _httpService:HttpService) {
    this.show = false;
    this.msg = "";
  }

  ngOnInit() {
    let id = this._activeRoute.snapshot.params["id"];
    let url = "http://localhost:3000/news_info";
    let params = new URLSearchParams();
    params.set("id", id);
    this._httpService.httpGet(url, params).subscribe(res=> {
      this.title = res[0].title;
      this.content = res[0].content;
      this.author = res[0].author;
      this.time = res[0].time;
    });
  }

  editClick() {

    let url = "http://localhost:3000/edit_news";
    let params = new URLSearchParams();
    let id = this._activeRoute.snapshot.params["id"];
    params.set("title", this.title);
    params.set("content", this.content);
    params.set("author", this.author);
    params.set("time", this.time);
    params.set("id", id);
    this._httpService.httpPost(url, params).subscribe(res=> {
      console.log(res);
      if (res.affectedRows > 0) {
        this.show = true;
        this.msg = "修改成功, 页面正在跳转...";
        setTimeout(()=> {
          window.location.href = "/home/news/" + id;
        }, 1000);
      }
      else {
        this.msg = "修改失败, 请刷新重试!";
      }
    });
  }

  froalaContent(event) {
    this.content = event;
  }
}
