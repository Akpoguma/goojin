import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AGBComponent } from './agb/agb.component';
import { DatenschutzComponent } from './datenschutz/datenschutz.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { ReferenzenComponent } from './referenzen/referenzen.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'our-services', component: OurServicesComponent},
  {path: 'agb', component: AGBComponent},
  {path: 'datenschutz', component: DatenschutzComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'referenzen', component: ReferenzenComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
