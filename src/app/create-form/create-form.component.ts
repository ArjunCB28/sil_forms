import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  private form;
  private formData: string;
  constructor(private formService: FormService, private router: Router) { }

  ngOnInit() {
  }

  onChange(event) {
    console.log(JSON.stringify(event.form));
    console.log(typeof (event.form));
    this.form = event.form;
  }

  onSubmit() {
    let data = {
      fields: this.form,
      formName: this.formData
    }
    this.formService.createTable(data).subscribe((data) => {
      console.log(data);
      this.router.navigate(["/readForms"]);
    });

    console.log(data);
  }

}
