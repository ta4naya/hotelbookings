import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'bwm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  widthLength:number = 50;
  widthMargin:number = 2;
  showImage:boolean = false;
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  products: any[] = [
    {
      "productId": 2,
      "imageUrl": "./assets/tony.jpg",
      "productName": "Faith in God",
      "producturl": "/music/David_Pawson_Revelation_Chapter_1_v_4-20.mp3",
      "productAuthor": 'Andrew Wommack'
    },
    {
      "productId": 3,
      "imageUrl": "./assets/sandwich.png",
      "productName": "Trust in God",
      "producturl": "/music/Corrie ten Boom.mp3",
      "productAuthor": 'Andrew Wommack'
    },
    {
      "productId": 4,
      "imageUrl": "./assets/burger.png",
      "productName": "A2 Language Level",
      "producturl": "/music/Herr_Professor_mit_Dan_B1L13-2.mp3",
      "productAuthor": 'Herr Professor'
    },
    {
      "productId": 5,
      "imageUrl": "./assets/meat.png",
      "productName": "Revelation",
      "producturl": "/music/Herr_Professor_mit_Dan_B1L13-2.mp3",
      "productAuthor": 'David Pawson'
    },
    {
      "productId": 6,
      "imageUrl": "./assets/melon.jpg",
      "productName": "Adjective Declension",
      "producturl": "/music/Hacking_the_Adjective_Declension.mp3",
      "productAuthor": 'Herr Professor'
    }
  ];



  constructor() { }

  ngOnInit() {
  }

}
