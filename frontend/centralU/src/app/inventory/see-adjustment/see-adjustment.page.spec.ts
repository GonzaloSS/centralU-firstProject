import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { SeeAdjustmentPage } from './see-adjustment.page';

describe('SeeAdjustmentPage', () => {
  let component: SeeAdjustmentPage;
  let fixture: ComponentFixture<SeeAdjustmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAdjustmentPage ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeAdjustmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
