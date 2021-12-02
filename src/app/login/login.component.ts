import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  checkEmail:String = ""
  checkPassword:String = ""
  username: String = ""
  constructor(private route: Router, private router:ActivatedRoute, private formBuilder:FormBuilder) { 
    this.username = window.atob(this.router.snapshot.queryParamMap.get('IJKL') || '')
    this.checkEmail = window.atob(this.router.snapshot.queryParamMap.get('ABCD') || '')
    this.checkPassword = window.atob(this.router.snapshot.queryParamMap.get('EFGH')|| '')
    if(this.username === ''){
      this.username = localStorage["username"]
    }
    if(this.checkEmail === ''){
      this.checkEmail = localStorage["email"]
    }
    if(this.checkPassword === ''){
      this.checkPassword = localStorage["password"]
    }
    if(localStorage["login"] === "yes"){
      this.route.navigate(["/dashboard"],{
        queryParams:{
          "user":window.btoa(this.username.toString())
        },
      });
    }
  }
  ngOnInit(): void {
    if(this.checkEmail === "" || this.checkPassword === "" || this.username === ""){
    localStorage["signup"] = "no"
    }
  }
  loginForm = this.formBuilder.group({
    email:[''],
    password:['']
  });
  signup(){
    localStorage["signup"] = "no"
    this.route.navigateByUrl("signup")
  }
  saveForm(){
    if(this.checkEmail === "" || this.checkPassword === "" || this.username === ""){
      alert("Please Signup!")
    }
    else if(this.loginForm.value.email === "" || this.loginForm.value.password === ""){
      alert("Please fill the details.")
    }
    else if((this.checkEmail === this.loginForm.value.email) && (this.checkPassword === this.loginForm.value.password)){
      localStorage.setItem("login", "yes")
      localStorage.setItem("dashboard", "no")
      this.route.navigate(["/dashboard"],{
        queryParams:{
          "user":window.btoa(this.username.toString())
        },
      });
    }
    else{
      alert("Wrong Credentials")
    }
    
  }

}
