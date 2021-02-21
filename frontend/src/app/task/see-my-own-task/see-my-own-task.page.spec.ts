import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeeMyOwnTaskPage } from './see-my-own-task.page';

describe('SeeMyOwnTaskPage', () => {
  let component: SeeMyOwnTaskPage;
  let fixture: ComponentFixture<SeeMyOwnTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeMyOwnTaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeeMyOwnTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
