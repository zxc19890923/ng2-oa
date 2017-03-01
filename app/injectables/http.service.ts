import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class HttpService {
  constructor(public http:Http) {

  }

  httpGet(url, params) {
    return this.http.get(url, {search: params}).map(result=>result.json());
  }

  httpPost(url, params) {
    return this.http.post(url, params).map(result=>result.json());
  }
}
