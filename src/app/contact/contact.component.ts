import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  name = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');
  // contactForm = new FormGroup({
  //   name: new FormControl(''),
  //   email: new FormControl(''),
  //   message: new FormControl(''),
  // });

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.contactForm.value);
  // }

  constructor() { 

  }

  ngOnInit(): void {

  }

}
