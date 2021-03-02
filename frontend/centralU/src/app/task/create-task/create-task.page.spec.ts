import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateTaskPage } from './create-task.page';

describe('CreateTaskPage', () => {
  let component: CreateTaskPage;
  let fixture: ComponentFixture<CreateTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
