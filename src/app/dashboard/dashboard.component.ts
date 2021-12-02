import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:String = ""
  constructor(private router:ActivatedRoute, private route:Router) { 
    this.user = window.atob(this.router.snapshot.queryParamMap.get('user') || '')
    if(localStorage["dashboard"] == "yes")
    {
      this.route.navigateByUrl("login")
    }
  }

  ngOnInit(): void {
    
  }
  
  logout(){
    localStorage["dashboard"] = "yes"
    localStorage["login"] = "no"
    this.route.navigateByUrl("login")
  }

}
