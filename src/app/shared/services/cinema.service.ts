import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_PATH } from '../constants/api-constant';
import { Details } from '../models/details';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  private baseUrl: string = environment.apiUrl;
  public pageName = new BehaviorSubject<string>('');
  public searchText = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  public getAllDetails(userMailId: string): Observable<Details> {
    const path = API_PATH.GETALLDETAILS;
    const body = { user_mail_id: userMailId };
    return this.http.post<Details>(this.baseUrl + path, body);
  }

  public setPageName(pageName: string) {
    this.pageName.next(pageName);
  }

  public getPageName() : Observable<string> {
    return this.pageName.asObservable();
  }

  updateSearchText(searchText: string) {
    this.searchText.next(searchText);
  }

  public getSearchText(): Observable<string> {
    return this.searchText.asObservable();
  }
}
