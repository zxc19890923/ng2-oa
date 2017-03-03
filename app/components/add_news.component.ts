import {Component} from "@angular/core";
import {HttpService} from "../injectables/http.service";
import {URLSearchParams} from "@angular/http";
@Component({
  selector: "oa-add-news",
  templateUrl: "../templates/add_news.component.html"
})
export class AddNewsComponent {
  title:string;
  content:string;
  author:string;
  time:string;

  message:string = "";
  show:boolean = false;

  constructor(public _httpService:HttpService) {

  }

  addClick() {
    var url = "http://localhost:3000/add_news";
    var params = new URLSearchParams();
    params.set("title", this.title);
    params.set("content", this.content);
    params.set("author", this.author);
    params.set("time", this.time);
    console.log(params.toString());
    this._httpService.httpPost(url, params).subscribe(res=> {
      console.log(res);
      if (res.affectedRows > 0) {
        this.message = "新建成功, 界面正在跳转......";
        this.show = true;
        setTimeout(()=> {
          window.location.href = "/home";
        }, 1000);
      }
      else {
        this.show = true;
        this.message = "新建新闻失败,请刷新界面重试!";
      }
    });
  }

  froalaContent(event) {
    this.content = event;
  }
}
