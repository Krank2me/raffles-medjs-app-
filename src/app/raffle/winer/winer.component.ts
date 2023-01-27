import { Component, OnInit } from '@angular/core';
import { RaffleService } from 'src/app/shared/services/raffle.service';

@Component({
  selector: 'app-winer',
  templateUrl: './winer.component.html',
  styleUrls: ['./winer.component.scss'],
})
export class WinerComponent implements OnInit {
  peopleList: string[] = [];
  winerList: string[] = [];
  winner: string = '';
  isWiner: boolean = false;
  isAgain: boolean = false;

  constructor(private raffleService: RaffleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.raffleService.getPeopleList().subscribe((res) => {
      this.peopleList = res.data;
    });
  }

  raffle() {
    this.isAgain = false;
    let ramdom = Math.floor(Math.random() * this.peopleList.length);
    if (this.peopleList[ramdom]) {
      this.winner = this.peopleList[ramdom];
      let repeat = this.winerList.indexOf(this.winner);
      if (repeat === -1) {
        this.winerList.push(this.winner);
        this.isWiner = true;
      } else {
        this.isAgain = true
      }


    }
  }
}
