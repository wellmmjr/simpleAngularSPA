import { Component, OnInit } from '@angular/core';
import Swall from 'sweetalert2'

@Component({
  selector: 'app-pretty-alert',
  templateUrl: './pretty-alert.component.html',
  styleUrls: ['./pretty-alert.component.css']
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
