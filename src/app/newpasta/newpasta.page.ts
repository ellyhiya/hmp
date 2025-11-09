import { Component, OnInit } from '@angular/core';
import { Foodservice } from '../foodservice';

@Component({
  selector: 'app-newpasta',
  templateUrl: './newpasta.page.html',
  styleUrls: ['./newpasta.page.scss'],
  standalone: false,
})
export class NewpastaPage implements OnInit {
  new_name = '';
  new_desc = '';
  arr_price: number[] = [];
  new_price=0;
  new_url = '';
  new_spicy: boolean = false;

  constructor(private foodservice: Foodservice) {}

  ngOnInit() {
    this.arr_price = this.generateNumberOptions(30000, 50000, 20000);
  }
  generateNumberOptions(start: number, end: number, step: number): number[] {
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i);
    }
    return options;
  }

  submitpasta() {
    this.foodservice.addPasta(
      this.new_name,
      this.new_url,
      this.new_desc,
      this.new_price,
      this.new_spicy,
    );
  }
}
