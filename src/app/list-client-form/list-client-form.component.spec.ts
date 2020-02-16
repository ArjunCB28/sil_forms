import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListClientFormComponent } from './list-client-form.component';

describe('ListClientFormComponent', () => {
  let component: ListClientFormComponent;
  let fixture: ComponentFixture<ListClientFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListClientFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
