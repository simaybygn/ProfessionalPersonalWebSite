import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/service/service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent implements OnInit {
formData!: FormGroup;
  constructor(private builder: FormBuilder, private contact: ServicesService) { 
  }

  ngOnInit() {
    this.formData = this.builder.group({
      email_from: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }


  onSubmit(formData:any) {
    this.contact.sendEmail('service_9s45w7f', 'template_1frrjfg', formData, 'KyYfCxj_OV4kc1Wy8')
      .then((response) => {
        alert('E-posta başarıyla gönderildi!'); 
      }, (error) => {
        alert('E-posta gönderilirken bir hata oluştu: ' + error); 
      });
  }

}
