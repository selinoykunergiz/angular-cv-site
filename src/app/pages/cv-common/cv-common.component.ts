import { Component, OnInit} from '@angular/core';
import { faHome, faUniversity } from '@fortawesome/free-solid-svg-icons';              
import data from '../../../assets/json/data.json';
import works from '../../../assets/json/works.json';

@Component({
  selector: 'app-cv-common',
  templateUrl: './cv-common.component.html',
  styleUrls: ['./cv-common.component.scss']
})
export class CvCommonComponent implements OnInit {

  experienceList: any;
  worksList: any;

  faHome = faHome;
  faUniversity = faUniversity;
  
  constructor() { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.getExperienceList();
    this.getWorkList();
  }

  getExperienceList() {
    this.experienceList = data;
  }

  getWorkList() {
    this.worksList = works;
    debugger
  }
}
