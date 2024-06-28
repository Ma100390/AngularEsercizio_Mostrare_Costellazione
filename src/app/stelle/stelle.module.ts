import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeStelleComponent } from './liste-stelle/liste-stelle.component';
import { DettaglioStelleComponent } from './dettaglio-stelle/dettaglio-stelle.component';



@NgModule({
  declarations: [
    ListeStelleComponent,
    DettaglioStelleComponent
  ],
  imports: [
    CommonModule
  ] , exports: [
    ListeStelleComponent
  ]
})
export class StelleModule { }
