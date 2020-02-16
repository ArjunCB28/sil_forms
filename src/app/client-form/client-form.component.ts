import { Component, OnInit, EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormService } from '../services/form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-client-form',
	templateUrl: './client-form.component.html',
	styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

	private form;
	private formData;
	private tableName;
	private sub: any;
	private formId;
	constructor(private formService: FormService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.formId = params['id'];
		});
		this.formService.getClientFormData(this.formId).subscribe((data) => {
			this.tableName = data[0].Table_Name;
			console.log(this.tableName);
			let tempData = JSON.parse(data[0].Json_Data);
			let temp = { components: tempData };
			console.log(temp);
			this.form = temp;
		})
	}

	onChange(submission: any) {
		if (submission.data) {
			this.formData = submission.data;
		}
	}

	onSubmit() {
		console.log(this.formData);
		console.log(this.tableName);
		this.formService.postClientFormData(this.formData, this.tableName).subscribe((data) => {
			console.log(data);
			this.router.navigate(["/client"]);
		});

	}
}
