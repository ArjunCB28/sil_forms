import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { FormioGrid } from 'angular-formio/grid';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { FormioResources } from 'angular-formio/resource';
import { PrismService } from './Prism.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppConfig } from './config';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FormModule } from './form/form.module';
import { ClientFormComponent } from './client-form/client-form.component';
import { ReadFormComponent } from './read-form/read-form.component';
import { ListReadFormComponent } from './list-read-form/list-read-form.component';
import { ListClientFormComponent } from './list-client-form/list-client-form.component';

// Make sure we use fontawesome everywhere in Form.io renderers.
const Formio = require('formiojs').Formio;
Formio.icons = 'fontawesome';

/**
 * Import the Custom component CheckMatrix.
 */
// import './components/CheckMatrix';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DataComponent,
    CreateFormComponent,
    ClientFormComponent,
    ReadFormComponent,
    ListReadFormComponent,
    ListClientFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormioModule,
    FormioGrid,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'create',
        component: CreateFormComponent
      },
      {
        path: 'client',
        component: ListClientFormComponent
      },
      {
        path: 'readForms',
        component: ListReadFormComponent

      },
      {
        path: 'readForms/:id',
        component: ReadFormComponent

      },
      {
        path: 'client/:id',
        component: ClientFormComponent

      }
    ])
  ],
  providers: [
    PrismService,
    FormioAuthService,
    FormioResources,
    { provide: FormioAppConfig, useValue: AppConfig },
    {
      provide: FormioAuthConfig, useValue: {
        login: {
          form: 'user/login'
        },
        register: {
          form: 'user/register'
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
