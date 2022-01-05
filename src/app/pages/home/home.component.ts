import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  colorName: string;

  constructor() {
    this.colorName = 'Dark Theme';
   }

  ngOnInit(): void {
  }

  changeBg() {
    if (document.body.style.backgroundColor == "white" || document.body.style.backgroundColor == "") {
      document.body.style.backgroundColor = "black";
      this.colorName = 'Light Theme';
    } 
    else {
      document.body.style.backgroundColor = "white";
      this.colorName = 'Dark Theme';
    }
  }
}
