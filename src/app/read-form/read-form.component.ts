import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-form',
  templateUrl: './read-form.component.html',
  styleUrls: ['./read-form.component.scss']
})
export class ReadFormComponent implements OnInit {

  private formStructure;
  private formData;
  private sub: any;
  private formId;
  constructor(private formService: FormService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.formId = params['id'];
    });
    console.log(this.formId);
    this.formService.getFormData(this.formId).subscribe((data: any) => {
      this.formData = data.data;
      let newData = [];
      for (let tempData in this.formData) {
        let temp = {
          data: this.formData[tempData]
        }
        newData.push(temp);
      }
      this.formData = newData;
      console.log(this.formData);
      let tempData = JSON.parse(data.json)
      let temp = { components: tempData };
      this.formStructure = temp;
      console.log(this.formStructure);
      console.log(data);
    })
  }

}
