import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddIncidenciaPage } from './add-incidencia.page';

describe('AddIncidenciaPage', () => {
  let component: AddIncidenciaPage;
  let fixture: ComponentFixture<AddIncidenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIncidenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddIncidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
