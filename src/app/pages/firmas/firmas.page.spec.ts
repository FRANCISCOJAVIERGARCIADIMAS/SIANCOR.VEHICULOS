import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirmasPage } from './firmas.page';

describe('FirmasPage', () => {
  let component: FirmasPage;
  let fixture: ComponentFixture<FirmasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirmasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
