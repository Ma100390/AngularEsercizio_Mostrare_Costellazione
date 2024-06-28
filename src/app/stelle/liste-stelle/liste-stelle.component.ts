import { ListaService } from './../../lista.service';
import { Component, OnInit } from '@angular/core';
import { Stella } from '../stella';


@Component({
  selector: 'app-liste-stelle',
  templateUrl: './liste-stelle.component.html',
  styleUrls: ['./liste-stelle.component.css']
})
export class ListeStelleComponent implements OnInit {
  selectedStella: Stella | undefined;
  stelle: Stella[] = [];
  listaService: any;

  constructor(private ListaService: ListaService) {}

  ngOnInit(): void {
    this.stelle = this.ListaService.getLISTA();
  }

  setSelectedStella(stella: Stella): void {
    this.selectedStella = stella;
  }
}

