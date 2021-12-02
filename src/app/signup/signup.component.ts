import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private formBuilder:FormBuilder) { 
    if (localStorage.getItem("signup") === "yes"){
    const username = this.loginForm.value.username
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
      this.router.navigate(["/login"],{
        queryParams:{
          "ABCD":window.btoa(email.toString()),
          "EFGH":window.btoa(password.toString()),
          "IJKL":window.btoa(username.toString())
        },
      });
    }
  }

  ngOnInit(): void {
  }
  loginForm = this.formBuilder.group({
    username:[''],
    email:[''],
    password:[''],
    confirmPassword:['']
  });
  saveForm(){
    const username = this.loginForm.value.username
    const email = this.loginForm.value.email
    const password = this.loginForm.value.password
    const confirmPassword = this.loginForm.value.confirmPassword
    if(password !== confirmPassword)
    {
      alert("Passwords are not matching!")
    }
    else if(username === "" || email === "" || password ===""){
      alert("Please fill the details.")
    }
    else{
      localStorage.setItem("signup", "yes")
      localStorage["username"] = username.toString()
      localStorage["email"] = email.toString()
      localStorage["password"] = password.toString()
      this.router.navigate(["/login"],{
        queryParams:{
          "ABCD":window.btoa(email.toString()),
          "EFGH":window.btoa(password.toString()),
          "IJKL":window.btoa(username.toString())
        },
      });
    }
    
  }

}
