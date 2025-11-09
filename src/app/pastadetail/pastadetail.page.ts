import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Foodservice } from '../foodservice';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
  standalone: false,
})
export class PastadetailPage implements OnInit {
  index = 0;
  constructor(private route: ActivatedRoute, private foodservice: Foodservice) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      //this.index = params['index']; // value of 'index' should match the route parameter name
      // You can use the 'index' parameter for your logic here
      this.foodservice.pastaDetail(params['index']).subscribe(
      (data)=> {
       this.pastas=data;
      }
     );
    });
      //this.pastas=this.foodservice.pastas

  }
  pastas:any={}
  
}
