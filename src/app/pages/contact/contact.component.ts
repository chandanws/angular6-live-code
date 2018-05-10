import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: ''
  };

  constructor(private contactService: ContactService) { }

  submitForm() {
    console.log('clicked');
    this.contactService.submitInquiry(this.formData)
    .subscribe(() => {
      console.log('submitted!');
    });
  }
}
