import { Component, OnInit } from '@angular/core';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-list-client-form',
  templateUrl: './list-client-form.component.html',
  styleUrls: ['./list-client-form.component.scss']
})
export class ListClientFormComponent implements OnInit {

  private tableData;
  constructor(private formService: FormService) { }

  ngOnInit() {
    this.formService.getAllForms().subscribe((data) => {
      console.log(data);
      this.tableData = data;
    })
  }

}
