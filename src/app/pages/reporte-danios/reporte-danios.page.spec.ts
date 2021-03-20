import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporteDaniosPage } from './reporte-danios.page';

describe('ReporteDaniosPage', () => {
  let component: ReporteDaniosPage;
  let fixture: ComponentFixture<ReporteDaniosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDaniosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteDaniosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
