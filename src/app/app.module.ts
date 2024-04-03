import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { WelcomeRIDHIComponent } from './welcome-ridhi/welcome-ridhi.component';
import { WhoAreYouComponent } from './who-are-you/who-are-you.component';
import { CarouselCardsComponent } from './carousel-cards/carousel-cards.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutOverviewComponent } from './about-overview/about-overview.component';
import { AboutOurTeamsComponent } from './about-our-teams/about-our-teams.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { ServicesMainComponent } from './services-main/services-main.component';
import { ContactManinComponent } from './contact-manin/contact-manin.component';
import { LocationCardsComponent } from './location-cards/location-cards.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { PaymentsComponent } from './payments/payments.component';
import { CardsComponent } from './cards/cards.component';
import { LendingsComponent } from './lendings/lendings.component';
import { ApplicatonComponent } from './applicaton/applicaton.component';
import { WavemakerComponent } from './wavemaker/wavemaker.component';
import { DigitalizationComponent } from './digitalization/digitalization.component';
import { ContactUsUPComponent } from './contact-us-up/contact-us-up.component';
import { ScrollableSectionComponent } from './scrollable-section/scrollable-section.component';
import { FullpageComponentComponent } from './fullpage-component/fullpage-component.component';
import { ScrollbleContactComponent } from './scrollble-contact/scrollble-contact.component';
import { NewAboutTeamComponent } from './new-about-team/new-about-team.component';
import { DomainsComponent } from './domains/domains.component';
import { NewServicesComponent } from './new-services/new-services.component';
import { NewOverviewComponent } from './new-overview/new-overview.component';
import { NewAboutHeroComponent } from './new-about-hero/new-about-hero.component';
import { ScrollableAboutComponent } from './scrollable-about/scrollable-about.component';
import { SpecialisationComponent } from './specialisation/specialisation.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    WelcomeRIDHIComponent,
    WhoAreYouComponent,
    CarouselCardsComponent,
    ServicesComponent,
    ContactUsComponent,
    AboutusComponent,
    AboutOverviewComponent,
    AboutOurTeamsComponent,
    AboutMainComponent,
    ServicesMainComponent,
    ContactManinComponent,
    LocationCardsComponent,
    BackToTopComponent,
    PaymentsComponent,
    CardsComponent,
    LendingsComponent,
    ApplicatonComponent,
    WavemakerComponent,
    DigitalizationComponent,
    ContactUsUPComponent,
    ScrollableSectionComponent,
    FullpageComponentComponent,
    ScrollbleContactComponent,
    NewAboutTeamComponent,
    DomainsComponent,
    NewServicesComponent,
    NewOverviewComponent,
    NewAboutHeroComponent,
    ScrollableAboutComponent,
    SpecialisationComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
