import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';              
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
