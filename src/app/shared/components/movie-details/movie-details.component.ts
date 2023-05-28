import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../../models/details';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit, OnChanges {
  @Input() movieDetails: Movie | undefined;
  public jonors: string[] | undefined = [];
  public languages: string[] | undefined = [];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['movieDetails'] != undefined && this.movieDetails) {
        this.jonors = this.movieDetails?.tags?.split(',');
        this.languages = this.movieDetails?.language?.split(',');
    }
  }
}
