import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReadFormComponent } from './list-read-form.component';

describe('ListReadFormComponent', () => {
  let component: ListReadFormComponent;
  let fixture: ComponentFixture<ListReadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
