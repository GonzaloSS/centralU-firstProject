import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', ()=>{
  let  user = {
      username: "Test",
      password: "test"
    };

    component.loginForm.controls['username'].setValue(user.username);
    component.loginForm.controls['password'].setValue(user.password);
    component.onFormSubmit();


    expect(component.onFormSubmit()).toEqual(user);
  });
});
