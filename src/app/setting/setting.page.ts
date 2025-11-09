import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
  standalone: false

})
export class SettingPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  url: string='';
  password: string = '';
kriteria1: boolean = false; // >6 karakter
kriteria2: boolean = false; // ada angka
kriteria3: boolean = false; // ada karakter spesial

cekPassword() {
  this.kriteria1 = this.password.length > 6;
  this.kriteria2 = /\d/.test(this.password);
  this.kriteria3 = /[!@#$%^&*]/.test(this.password);
} 
}
