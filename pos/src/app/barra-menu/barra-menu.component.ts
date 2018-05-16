import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
 
})
export class BarraMenuComponent implements OnInit {
  manzana="manzana"
  mac="Mac"
  ipad="iPad"
  iphone="iPhone"
  watch="Watch"
  tv="Tv"
  music="Music"
  soporte="Soporte"

  constructor() { }

  ngOnInit() {
   
  }

}
