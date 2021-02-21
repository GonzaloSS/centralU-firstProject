import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeeEmployeesPage } from './see-employees.page';

describe('SeeEmployeesPage', () => {
  let component: SeeEmployeesPage;
  let fixture: ComponentFixture<SeeEmployeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeEmployeesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeEmployeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
