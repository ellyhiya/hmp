import { Component, OnInit } from '@angular/core';

interface Product {
  productName: string;
  productDate: Date;
  productPrice: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false,
})
export class ListPage implements OnInit {
  qty = 0;

  increase() {
    if (this.qty < 10) this.qty++;
  }
  decrease() {
    if (this.qty > 0) this.qty--;
  }
  get totalAmount(): number {
    return this.product.productPrice * this.qty;
  }
  textcolor: string = 'red';

  is5daysago = false;
  numberClicked = 0;
  strValid = '';
  discount = 0;
  couponCode = '';


  currentDate = new Date(); //get current date
  days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publishedDate: new Date('1960-07-11'),
      price: 7.99,
      discount:0,
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedDate: new Date('1925-04-10'),
      price: 10.99,
      discount:5,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publishedDate: new Date('1813-01-28'),
      price: 12.75,
     discount: 10,
    }
  ]


  today_ind(): string {
    const day = this.days[this.currentDate.getDay()];
    const d = this.currentDate.getDate();
    const m = this.month[this.currentDate.getMonth()];
    const y = this.currentDate.getFullYear();
    return `${day}, ${d} ${m} ${y}`;
  }
  constructor() {}
  ngOnInit() {}

  product: Product = {
    productName: 'Iphone 14',
    productDate: new Date(),
    productPrice: 14000000,
  };

  goYesterday() {
    this.currentDate.setDate(this.currentDate.getDate() - 1);
    this.numberClicked++;
    if (this.numberClicked == 5) this.is5daysago = true;
  }
  goToday() {
    this.currentDate.setDate(this.currentDate.getDate());
  }
  goTomorrow() {
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.numberClicked--;
    if (this.numberClicked == 5) this.is5daysago = true;
  }
  checkValid() {
    if (this.couponCode === '0000') {
      this.strValid = 'Valid';
      this.textcolor = 'green'; 
      this.discount = 5;
    } else if (this.couponCode === '6789') {
      this.strValid = 'Valid';
      this.discount = 10;
      this.textcolor = 'green'; 

    } else if (this.couponCode === '1234') {
      this.strValid = 'Valid';
      this.discount = 5;
      this.textcolor = 'green'; 

    } else {
      this.strValid = 'Invalid';
      this.discount = 0;
      this.textcolor = 'red'; 

    }

  }
}
