import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporteDatosGeneralesPage } from './reporte-datos-generales.page';

describe('ReporteDatosGeneralesPage', () => {
  let component: ReporteDatosGeneralesPage;
  let fixture: ComponentFixture<ReporteDatosGeneralesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteDatosGeneralesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteDatosGeneralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
