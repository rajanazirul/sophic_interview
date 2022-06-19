import { Component } from '@angular/core';

import { Account } from './account';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  model = new Account(18, '', '', '');

  submitted = false;
  popup = false;

  onSubmit() {
    this.submitted = true;
    this.popup = true;
    console.log(this.model);
  }

  newAccount() {
    this.model = new Account(42, '', '', '');
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showMessage() {
    return `${this.model.firstName} ${this.model.lastName}`;
  }

  /////////////////////////////
}
