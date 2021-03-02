import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeeAllTaskPage } from './see-all-task.page';

describe('SeeAllTaskPage', () => {
  let component: SeeAllTaskPage;
  let fixture: ComponentFixture<SeeAllTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeAllTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeAllTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
