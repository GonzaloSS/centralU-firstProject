import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddAdjustmentPage } from './add-adjustment.page';

describe('AddAdjustmentPage', () => {
  let component: AddAdjustmentPage;
  let fixture: ComponentFixture<AddAdjustmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdjustmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddAdjustmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
