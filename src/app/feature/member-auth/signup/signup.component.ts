import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tinder-clone-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    alert('submitted')
  }
}
