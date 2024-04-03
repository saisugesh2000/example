import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WelcomeRIDHIComponent } from './welcome-ridhi/welcome-ridhi.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { ServicesMainComponent } from './services-main/services-main.component';
import { ContactManinComponent } from './contact-manin/contact-manin.component';
import { PaymentsComponent } from './payments/payments.component';
import { LendingsComponent } from './lendings/lendings.component';
import { CardsComponent } from './cards/cards.component';
import { ApplicatonComponent } from './applicaton/applicaton.component';
import { DigitalizationComponent } from './digitalization/digitalization.component';
import { WavemakerComponent } from './wavemaker/wavemaker.component';
import { ScrollableSectionComponent } from './scrollable-section/scrollable-section.component';
import { FullpageComponentComponent } from './fullpage-component/fullpage-component.component';
import { ScrollbleContactComponent } from './scrollble-contact/scrollble-contact.component';
import { NewAboutTeamComponent } from './new-about-team/new-about-team.component';
import { DomainsComponent } from './domains/domains.component';
import { CarouselCardsComponent } from './carousel-cards/carousel-cards.component';
import { NewServicesComponent } from './new-services/new-services.component';
import { NewOverviewComponent } from './new-overview/new-overview.component';
import { NewAboutHeroComponent } from './new-about-hero/new-about-hero.component';
import { ScrollableAboutComponent } from './scrollable-about/scrollable-about.component';
import { SpecialisationComponent } from './specialisation/specialisation.component';



const routes: Routes = [
// Routing Path For Entire Application
// {path:'',component:WelcomeRIDHIComponent},
{path:'Aboutus',component:AboutMainComponent},
{path:'Header',component:HeaderComponent},
{path:"Services",component:ServicesMainComponent},
{path:"Contact_Us",component:ContactManinComponent},
{path:"payments",component:PaymentsComponent},
{path:"lendings",component:LendingsComponent},
{path:"cards",component:CardsComponent},
{path:"application",component:ApplicatonComponent},
{path:"digitalization",component:DigitalizationComponent},
{path:"postilion",component:WavemakerComponent},
{path:"",component:ScrollableSectionComponent},
{path:"scroll1",component:FullpageComponentComponent},
{path:"scroll-contact",component:ScrollbleContactComponent},
{path:"aboutnew",component:NewAboutTeamComponent},
{path:"domains",component:DomainsComponent},
{path:"carc",component:CarouselCardsComponent},
{path:"servicesnew",component:NewServicesComponent},
{path:"overview",component:NewOverviewComponent},
{path:"abouthero",component:NewAboutHeroComponent},
{path:"scrollabout",component:ScrollableAboutComponent},
{path:"specialisation",component:SpecialisationComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


