import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscriptionForm:NgForm;
  defaultSub = 'advanced';

  subscription={
    email: '',
    password:''
  }

  submitted = false;

  onSubmit(form:NgForm) {
    this.subscription.email = this.subscriptionForm.value.userData.email;
    this.subscription.password = this.subscriptionForm.value.userData.password;
    this.submitted = true;

    this.subscriptionForm.reset();
  }
}
