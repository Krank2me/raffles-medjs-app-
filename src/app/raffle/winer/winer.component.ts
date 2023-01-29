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
  email: string = '';
  fullname: string = '';
  isWiner: boolean = false;
  isAgain: boolean = false;

  constructor(private raffleService: RaffleService) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.raffleService.getPeopleList().subscribe((res) => {
      this.peopleList = res?.data;
    });
  }

  raffle() {
    this.isAgain = false;
    let ramdom = Math.floor(Math.random() * this.peopleList.length);

    if (this.peopleList[ramdom]) {
      let element = this.peopleList[ramdom];
      let elementJson = JSON.stringify(element);
      this.email = JSON.parse(elementJson)?.fields?.email;
      this.fullname = JSON.parse(elementJson)?.fields?.fullname;
      let repeat = this.winerList.indexOf(this.email);
      if (repeat === -1) {
        this.winerList.push(this.email);
        this.isWiner = true;
      } else {
        this.isAgain = true;
      }
    }
  }
}
