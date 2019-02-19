import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  constructor() { }
  rentals: any[] =[1,2,3,4]
  ngOnInit() {
  }

}
