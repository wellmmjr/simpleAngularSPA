import { Component, Input, OnInit, Injectable } from '@angular/core';
import Swall from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class PrettyAlertComponent {

  constructor() { }

  showMessage(titleP: string, iconP, textP: string){

    Swall.fire({
      title: titleP,
      text: textP,
      icon: iconP
    });
  
  }

}
