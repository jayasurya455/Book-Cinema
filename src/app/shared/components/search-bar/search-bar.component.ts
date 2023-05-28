import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CinemaService } from '../../services/cinema.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  public pageName: string = '';
  public ngUnsubscribe = new Subject();
  public searchText : string = '';

  constructor(private cinemaService: CinemaService) {}

  ngOnInit(): void {
    this.cinemaService.getPageName().pipe(takeUntil(this.ngUnsubscribe)).subscribe((page) => {
      this.pageName = page;
    });
  }

  onSearchChange() {
    this.cinemaService.updateSearchText(this.searchText);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(null);
    this.ngUnsubscribe.complete();
  }
}
