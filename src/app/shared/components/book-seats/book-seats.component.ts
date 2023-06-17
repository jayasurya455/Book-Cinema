import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  SeatDetails,
  columnDetails,
  rowDetails,
} from '../../models/seat-details';

@Component({
  selector: 'app-book-seats',
  templateUrl: './book-seats.component.html',
  styleUrls: ['./book-seats.component.scss'],
})
export class BookSeatsComponent implements OnInit {
  @Output() updateShowButton = new EventEmitter<{ showBookButton: boolean }>();
  public theaterSeats: SeatDetails[] = [
    {
      seatType: 'Premium',
      rate: '210',
      rows: [
        {
          name: 'A',
          columns: [
            {
              type: 'left',
              seatNumber: [1, 2, 3],
            },
            {
              type: 'middle',
              seatNumber: [4, 5, 6, 7],
            },
            {
              type: 'right',
              seatNumber: [8, 9, 10],
            },
          ],
        },
        {
          name: 'B',
          columns: [
            {
              type: 'left',
              seatNumber: [11, 12, 13],
            },
            {
              type: 'middle',
              seatNumber: [14, 15, 16, 17],
            },
            {
              type: 'right',
              seatNumber: [18, 19, 20],
            },
          ],
        },
        {
          name: 'C',
          columns: [
            {
              type: 'left',
              seatNumber: [21, 22, 23],
            },
            {
              type: 'middle',
              seatNumber: [24, 25, 26, 27],
            },
            {
              type: 'right',
              seatNumber: [28, 29, 30],
            },
          ],
        },
        {
          name: 'D',
          columns: [
            {
              type: 'left',
              seatNumber: [31, 32, 33],
            },
            {
              type: 'middle',
              seatNumber: [34, 35, 36, 37],
            },
            {
              type: 'right',
              seatNumber: [38, 39, 40],
            },
          ],
        },
        {
          name: 'E',
          columns: [
            {
              type: 'left',
              seatNumber: [41, 42, 43],
            },
            {
              type: 'middle',
              seatNumber: [44, 45, 46, 47],
            },
            {
              type: 'right',
              seatNumber: [48, 49, 50],
            },
          ],
        },
      ],
    },
    {
      seatType: 'Normal',
      rate: '190',
      rows: [
        {
          name: 'F',
          columns: [
            {
              type: 'left',
              seatNumber: [51, 52, 53],
            },
            {
              type: 'middle',
              seatNumber: [54, 55, 56, 57],
            },
            {
              type: 'right',
              seatNumber: [58, 59, 60],
            },
          ],
        },
        {
          name: 'G',
          columns: [
            {
              type: 'left',
              seatNumber: [61, 62, 63],
            },
            {
              type: 'middle',
              seatNumber: [64, 65, 66, 67],
            },
            {
              type: 'right',
              seatNumber: [68, 69, 70],
            },
          ],
        },
        {
          name: 'H',
          columns: [
            {
              type: 'left',
              seatNumber: [71, 72, 73],
            },
            {
              type: 'middle',
              seatNumber: [74, 75, 76, 77],
            },
            {
              type: 'right',
              seatNumber: [78, 79, 80],
            },
          ],
        },
        {
          name: 'I',
          columns: [
            {
              type: 'left',
              seatNumber: [81, 82, 83],
            },
            {
              type: 'middle',
              seatNumber: [84, 85, 86, 87],
            },
            {
              type: 'right',
              seatNumber: [88, 89, 90],
            },
          ],
        },
        {
          name: 'J',
          columns: [
            {
              type: 'left',
              seatNumber: [91, 92, 93],
            },
            {
              type: 'middle',
              seatNumber: [94, 95, 96, 97],
            },
            {
              type: 'right',
              seatNumber: [98, 99, 100],
            },
          ],
        },
      ],
    },
  ];
  public bookedSeats = [2, 4, 5];
  public selectedSeats: number[] = [];
  public showButton: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  selectOrDeselectSeat(seatNumber: number) {
    if (this.selectedSeats.findIndex((obj) => obj === seatNumber) == -1) {
      this.selectedSeats.push(seatNumber);
    } else {
      this.selectedSeats = this.selectedSeats.filter(
        (obj) => obj !== seatNumber
      );
    }

    if (this.selectedSeats.length > 0) {
      this.updateShowButton.emit({ showBookButton: true });
    } else {
      this.updateShowButton.emit({ showBookButton: false });
    }
  }
}
