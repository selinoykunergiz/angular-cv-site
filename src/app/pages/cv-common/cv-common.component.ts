import { Component, OnInit} from '@angular/core';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faHome, faUniversity } from '@fortawesome/free-solid-svg-icons';              
import data from '../../../assets/json/data.json';
import works from '../../../assets/json/works.json';
import abilities from '../../../assets/json/abilities.json';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cv-common',
  templateUrl: './cv-common.component.html',
  styleUrls: ['./cv-common.component.scss']
})
export class CvCommonComponent implements OnInit {

  experienceList: any;
  worksList: any;
  abilitiesList: any;

  faHome = faHome;
  faUniversity = faUniversity;
  faStar = faStar;
  faMarkdown = faMarkdown;
  faCheck = faCheck;
  
  param = {value: 'world'};

  translate;
  constructor(translate: TranslateService) {
    this.translate = translate;
    translate.addLangs(['en', 'tr']);
      translate.setDefaultLang('en');
      translate.use('en');
      const browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|tr/) ? browserLang : 'en');
  }



  ngOnInit(): void {
    this.init();
  }

  init() {
    this.getExperienceList();
    this.getWorkList();
    this.getAbilitiesList();
  }

  getExperienceList() {
    this.experienceList = data;
  }

  getWorkList() {
    this.worksList = works;
  }

  getAbilitiesList() {
    this.abilitiesList = abilities;
  }

  downloadCv() {
    window.print();
  }

}
