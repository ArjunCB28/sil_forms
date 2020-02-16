import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-list-read-form',
  templateUrl: './list-read-form.component.html',
  styleUrls: ['./list-read-form.component.scss']
})
export class ListReadFormComponent implements OnInit {

  private tableData;
  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.getAllForms().subscribe((data) => {
      console.log(data);
      this.tableData = data;
    })
  }

}
