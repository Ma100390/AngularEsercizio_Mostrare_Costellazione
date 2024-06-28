import { Injectable } from '@angular/core';
import { Stella } from './stelle/stella';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() { }


  getLISTA(): Stella[] {
    return [
      {
        nome: "Arturo",
        classificazione: "gigante arancione",
        distanza: 36.7,
        costellazione: "Boote",
        magnitudineAp: -0.05,
        magnitudineAs: -0.38
      },
      {
        nome: "Alkalurops",
        classificazione: "stella multipla",
        distanza: 120,
        costellazione: "Boote",
        magnitudineAp: 4.397,
        magnitudineAs: 1.43
      },
      {
        nome: "Asellus Primus",
        classificazione: "bianco-gialla",
        distanza: 48,
        costellazione: "Boote",
        magnitudineAp: 4.1,
        magnitudineAs: 3.28
      },
      {
        nome: "Izar",
        classificazione: "stella binaria",
        distanza: 210,
        costellazione: "Boote",
        magnitudineAp: 2.35,
        magnitudineAs: -1.69
      },
      {
        nome: "Seginus",
        classificazione: null,
        distanza: 85,
        costellazione: "Boote",
        magnitudineAp: 3.02,
        magnitudineAs: 3.02
      },
      {
        nome: "Achird",
        classificazione: "stella binaria",
        distanza: 19.42,
        costellazione: "Cassiopea",
        magnitudineAp: 3.52,
        magnitudineAs: 4.59
      },
      {
        nome: "Shedir",
        classificazione: "gigante arancione",
        distanza: 229,
        costellazione: "Cassiopea",
        magnitudineAp: 2.25,
        magnitudineAs: -1.99
      },
      {
        nome: "Segin",
        classificazione: "gigante blu",
        distanza: 410,
        costellazione: "Cassiopea",
        magnitudineAp: 3.38,
        magnitudineAs: -2.15
      },
      {
        nome: "Kitalpha",
        classificazione: "stella binaria",
        distanza: 186,
        costellazione: "Cavallino",
        magnitudineAp: -2,
        magnitudineAs: 3.92
      },
      {
        nome: "Minelava",
        classificazione: "gigante rossa",
        distanza: 202,
        costellazione: "Vergine",
        magnitudineAp: 3.38,
        magnitudineAs: -0.53
      },
      {
        nome: "Porrima",
        classificazione: "stella binaria",
        distanza: 38.6,
        costellazione: "Vergine",
        magnitudineAp: 2.74,
        magnitudineAs: 2.38
      },
      {
        nome: "Zaniah",
        classificazione: "stella multipla",
        distanza: 265,
        costellazione: "Vergine",
        magnitudineAp: 3.89,
        magnitudineAs: -0.66
      },
      {
        nome: "Zavijava",
        classificazione: "nana bianco-gialla",
        distanza: 35.6,
        costellazione: "Vergine",
        magnitudineAp: 3.61,
        magnitudineAs: 3.40
      }
    ];  
  }
}
