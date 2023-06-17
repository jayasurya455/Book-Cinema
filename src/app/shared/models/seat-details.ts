export interface SeatDetails {
  seatType: String;
  rate: String;
  rows: rowDetails[];
}

export interface rowDetails {
  name: String;
  columns: columnDetails[];
}

export interface columnDetails {
  type: String;
  seatNumber: number[];
}
