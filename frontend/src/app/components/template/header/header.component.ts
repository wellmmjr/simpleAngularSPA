import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isLogedIn: Boolean

  constructor(private router: Router) { }

  ngOnInit(): void {

    
  }


  navigateToUserLogAction(){
    console.log("navigate to ?")
    if(this.isLogedIn){
      this.router.navigate([''])
    }else{
      this.router.navigate([''])
    }
  }

  isUserLogedIn(){

  }

}
