import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateEmployeePage } from './update-employee.page';

describe('UpdateEmployeePage', () => {
  let component: UpdateEmployeePage;
  let fixture: ComponentFixture<UpdateEmployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmployeePage ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateEmployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
