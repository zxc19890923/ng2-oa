import {Component, OnInit} from "@angular/core";
@Component({
  selector: "oa-home",
  templateUrl: "../templates/home.component.html"
})
export class HomeComponent implements OnInit {
  username:string;
  constructor() {

  }
  ngOnInit() {
    this.username = sessionStorage.getItem("username");
    if (this.username == "" || this.username == undefined || this.username == null) {
      window.location.href = "/login";
    }
  }

  outClick() {
    if (confirm("您确定退出系统吗?")) {
      sessionStorage.clear();
      window.location.href = "/login";
    }
  }
}
