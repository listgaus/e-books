import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiResult} from "../../assets/models/data-model";


@Injectable()
export class ApiService {
  googleApiUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=';
  maxResult: string = '&maxResults=20';
  apiKey: string = '&key=AIzaSyAljHvgQzlHCpN_MQkmt33oUCaJ0UM5mT4';

  constructor(private http: HttpClient) {}

  getBooks(query:string): Observable<ApiResult> {
    return this.http.get<ApiResult>(`${this.googleApiUrl}${query}${this.maxResult}${this.apiKey}`);
  }

}
