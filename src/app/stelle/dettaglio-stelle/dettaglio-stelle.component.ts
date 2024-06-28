import { Stella } from './../stella';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dettaglio-stelle',
  templateUrl: './dettaglio-stelle.component.html',
  styleUrls: ['./dettaglio-stelle.component.css']
})
export class DettaglioStelleComponent {
  @Input() Stella: Stella | undefined;
}
