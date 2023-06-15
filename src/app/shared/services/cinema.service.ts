import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { API_PATH } from '../constants/api-constant';
import { Details, Movie, Theatre } from '../models/details';

@Injectable({
  providedIn: 'root',
})
export class CinemaService {
  private baseUrl: string = environment.apiUrl;
  public pageName = new BehaviorSubject<string>('');
  public searchText = new BehaviorSubject<string>('');
  public bookSeatsDetails = new BehaviorSubject<{
    theatre: Theatre | undefined;
    showTime: String;
    movie: Movie | undefined;
  }>({ theatre: undefined, showTime: '', movie: undefined });

  constructor(private http: HttpClient) {}

  public getAllDetails(userMailId: string): Observable<Details> {
    const path = API_PATH.GETALLDETAILS;
    const body = { user_mail_id: userMailId };
    return this.http.post<Details>(this.baseUrl + path, body);
  }

  public setPageName(pageName: string) {
    this.pageName.next(pageName);
  }

  public getPageName(): Observable<string> {
    return this.pageName.asObservable();
  }

  updateSearchText(searchText: string) {
    this.searchText.next(searchText);
  }

  public getSearchText(): Observable<string> {
    return this.searchText.asObservable();
  }

  updateBookSeatsDetails(
    theatreDetail: Theatre | undefined,
    showTimeDetail: String,
    movieDetail: Movie | undefined
  ) {
    this.bookSeatsDetails.next({
      theatre: theatreDetail,
      showTime: showTimeDetail,
      movie: movieDetail,
    });
  }

  public getBookSeatsDetails(): Observable<{
    theatre: Theatre | undefined;
    showTime: String;
    movie: Movie | undefined;
  }> {
    return this.bookSeatsDetails.asObservable();
  }
}
