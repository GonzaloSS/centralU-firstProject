import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateTaskPage } from './update-task.page';

describe('UpdateTaskPage', () => {
  let component: UpdateTaskPage;
  let fixture: ComponentFixture<UpdateTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTaskPage ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
