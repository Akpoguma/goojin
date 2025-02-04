import { Component, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Formular } from '../shared/formular';
import { ContactUsService } from '../services/contact-us.service';


@Component({
  selector: 'app-contact-us',
  standalone: false,

  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  cformular!: Formular
  cform!: FormGroup

  @ViewChild('formular') formularDirective!: NgForm;

  constructor(private fb: FormBuilder, private contactService: ContactUsService) {
    this.createForm()
  }

  createForm(): void {
    this.cform = this.fb.group({
      name: [''],
      email: [''],
      subject: [''],
      message: ['']
    })
  }

  onSubmit() {
    this.cformular = this.cform.value
    this.contactService.postFormular(this.cformular).subscribe(
      (data) => {
        console.log('Success!', data)
      },
      error => {
        console.error('Error!', error)
      }
    )
    // this.formularDirective.reset()
  }

}
