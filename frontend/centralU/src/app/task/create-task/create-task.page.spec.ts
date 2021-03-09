import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CreateTaskPage } from './create-task.page';

describe('CreateTaskPage', () => {
  let component: CreateTaskPage;
  let fixture: ComponentFixture<CreateTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaskPage ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create task', ()=>{
    let  task = {
      id: null,
      name: [''],
      description: [''],
      date_deadline:[''],
      project_id: null,
      user_id: null,
      stage_id: null,
      stage_name: null
      };
  
      component.taskForm.controls['name'].setValue(task.name);
      component.taskForm.controls['description'].setValue(task.description);
      component.taskForm.controls['date_deadline'].setValue(task.date_deadline);
      component.onFormSubmit();
  
  
      expect(component.onFormSubmit()).toEqual(task);
    });
});
