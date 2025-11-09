import { Component, OnInit } from '@angular/core';
import { Foodservice } from '../foodservice';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
  standalone:false,
})
export class PastaPage implements OnInit {
  constructor(private foodservice: Foodservice) {}

  jenistampilan="accordion";
  pastas:any[]=[]
ngOnInit(): void {
  this.pastas = this.foodservice.pastas;
}

  chunkArray(arr: any[], chunkSize: number): any[][] {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

  
}
