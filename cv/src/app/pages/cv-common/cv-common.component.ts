import { Component, OnInit } from '@angular/core';
import data from '../../../assets/json/data.json';

@Component({
  selector: 'app-cv-common',
  templateUrl: './cv-common.component.html',
  styleUrls: ['./cv-common.component.scss']
})
export class CvCommonComponent implements OnInit {

  commonList: any;

  constructor() { }

  ngOnInit(): void {
    //this.commonList = data;
  }

}
