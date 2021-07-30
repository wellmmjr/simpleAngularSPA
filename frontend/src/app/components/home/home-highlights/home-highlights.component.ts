import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-highlights',
  templateUrl: './home-highlights.component.html',
  styleUrls: ['./home-highlights.component.css']
})
export class HomeHighlightsComponent implements OnInit {

  scrollItems: any[];

  constructor() { }

  ngOnInit(): void {

    this.scrollItems = [
      'Herb Costales',
      'Gloria Cherie',
      'Paraskeva Goran',
      'Paskal',
      'Nadia',
      'Lyudmila',
      'Mihaela',
      'Snezhana',
      'Katya',
      'Ekaterina',
      'Milena',
      'Nedyalka',
      'Nadejda',
      'Hristina',
      'Denica',
      'Gabriela',
      'Kuzman',
      'Roza',
      'Genko',
      'Lyubomir',
      'Tereza',
      'Eva',
      'Zara',
      'Mila',
      'Veronika',
      'Blaga',
      'Ilarion',
      'Sofia',
      'Ignat'

    ];

  }

}
