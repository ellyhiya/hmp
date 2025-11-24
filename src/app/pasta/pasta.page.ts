import { Component, OnInit } from '@angular/core';
import { Foodservice } from '../foodservice';
import { DexieService } from '../dexie';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
  standalone: false,
})
export class PastaPage implements OnInit {
  constructor(private foodservice: Foodservice,
    private dex: DexieService) { }


  jenistampilan = "accordion";
  pastas: any[] = []
  searchTerm: string = '';

  get filteredPastas() {
    if (!this.pastas || !this.pastas.length) {
      return [];
    }
    const q = (this.searchTerm || '').trim().toLowerCase();
    if (!q) {
      return this.pastas;
    }

    const result = this.pastas.filter(p =>
      (p.name || '').toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q)
    );

    console.log('Filter term:', q, 'Results:', result);
    return result;
  }

  ngOnInit() {
    //this.pastas=this.foodservice.pastas
    this.foodservice.pastaList().subscribe(
      (data) => {
        this.pastas = data;
      }
    );
  }
  ionViewWillEnter() {
    this.foodservice.pastaList().subscribe((data) => {
      this.pastas = data;
    })
  }
  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }

  addtocart(id: number, name: string, price: number, num: number) {
    this.dex.addItem(id, name, price, num).then(() => {
      alert('Item added successfully.');
    })
      .catch(error => {
        alert('Error adding item:' + error);
      });
  }

}
