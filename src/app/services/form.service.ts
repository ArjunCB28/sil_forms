import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FormService {
  private createURL: string = "http://localhost:3000/table";
  private getTableData: string = "http://localhost:3000/table/"
  private postTableData: string = "http://localhost:3000/table/"
  private getDataURL: string = "http://localhost:3000/fetch/"
  private getFormURL: string = "http://localhost:3000/fetch";
  constructor(private http: HttpClient) { }

  createTable(formData) {
    return this.http.post(this.createURL, formData)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }))
  }

  getClientFormData(formData) {
    let url = this.getDataURL + formData;
    return this.http.get(url)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }))
  }

  postClientFormData(data, tableName) {
    let url = this.postTableData + tableName;
    let postData = {
      data: data,
      tableName: tableName
    }
    return this.http.post(url, postData)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }))
  }

  getFormData(formName) {
    let url = this.getTableData + formName;
    return this.http.get(url)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }))
  }

  getAllForms() {
    return this.http.get(this.getFormURL)
      .pipe(map((data) => {
        console.log(data);
        return data;
      }))
  }
}