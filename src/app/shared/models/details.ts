export interface Details {
  movies: Movie[];
  theatre: Theatre[];
}

export interface Movie {
  imdb_rating: string;
  language: string;
  movie_name: string;
  release_date: string;
  running_time: string;
  tags: string;
  thumbnail_url: string;
}

export interface Theatre {
  address: string;
  booked_seats: BookedSeat[];
  customer_rating: string;
  show1_movie: string;
  show1_time: string;
  show2_movie: string;
  show2_time: string;
  show3_movie: string;
  show3_time: string;
  show4_movie: string;
  show4_time: string;
  theatre_name: string;
  thumbnail_url: string;
  website: string;
}

export interface BookedSeat {
  date: string;
  show1_booked_seats: string;
  show1_time: string;
  show2_booked_seats: string;
  show2_time: string;
  show3_booked_seats: string;
  show3_time: string;
}
