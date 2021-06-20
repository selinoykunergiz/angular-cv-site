import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { faSquare, faCheckSquare, faCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare, faStar, faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium, faLinkedin, faLinkedinIn, faMailchimp, faMarkdown } from '@fortawesome/free-brands-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faSquare, faCheck, faCheckSquare, farSquare, farCheckSquare, faStar, faStackOverflow, faGithub, faMedium, 
      faLinkedin, faMarkdown, faLinkedinIn, faMailchimp);
  }
  
}
