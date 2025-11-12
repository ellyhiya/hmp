import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foodservice } from '../foodservice';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
  standalone: false,
})
export class PastadetailPage implements OnInit {
  index = 0;
  pastaId = 0;
  step = 0;
  instruction = '';

  constructor(private router: Router, private route: ActivatedRoute, private foodservice: Foodservice) { }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      //this.index = params['index']; // value of 'index' should match the route parameter name
      // You can use the 'index' parameter for your logic here
      this.foodservice.pastaDetail(params['index']).subscribe(
        (data) => {
          this.pastas = data;
        }
      );
      this.loadPastaDetail(params['index']);
    });
    //this.pastas=this.foodservice.pastas
  }
  pastas: any = {}
  deletepasta(id: any) {
    this.foodservice.deletePasta(id).subscribe((response: any) => {
      if (response.result === 'success') {
        alert("success")
        this.router.navigate(['/pasta'])
      }
      else {
        alert(response.message)
      }
    });
  }

  loadPastaDetail(id: any) {
    this.foodservice.pastaDetail(id).subscribe((data: any) => {
      this.pastas = data;
      // this.instruction = data.instructions;
    });
  }
  addInstruction(id: any) {
    //this.foodservice.addPasta(this.new_name,this.new_url,this.new_desc,this.new_price)
    this.foodservice.addInstruction(id, this.step,
      this.instruction).subscribe((response: any) => {
        if (response.result === 'success') {
          alert("success")
          this.loadPastaDetail(id);
          this.step = 0;
          this.instruction = '';
          this.loadPastaDetail(id);
        }
        else {
          alert(response.message)
        }
      });
  }

}
