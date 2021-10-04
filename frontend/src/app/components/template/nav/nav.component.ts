import { NavService } from './nav.service';
import { MenuItem } from './navItem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  menuItens: MenuItem[]

  menuLoaded = false

  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.listWorkspace().subscribe(menuItens => {
      this.menuItens = menuItens
      if(this.menuItens.length > 0){
        
        this.menuLoaded = true

      }
    })
  }

}
