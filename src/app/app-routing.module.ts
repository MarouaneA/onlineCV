import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeComponent } from 'src/app/me/me.component';
import { InteretComponent } from 'src/app/interet/interet.component';
import { ExperienceComponent } from 'src/app/experience/experience.component';
import { EducationComponent } from 'src/app/education/education.component';
import { ContactComponent } from 'src/app/contact/contact.component';
import { CompetencesComponent } from "src/app/competences/competences.component";

const routes: Routes = [ {path : 'me' , component : MeComponent},
{path : 'experience' , component : ExperienceComponent},
{path : 'education' , component : EducationComponent},
{path : 'competences' , component : CompetencesComponent},
{path : 'interet' , component : InteretComponent},
{path : 'contact' , component : ContactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
