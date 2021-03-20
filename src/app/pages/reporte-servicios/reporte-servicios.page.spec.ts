import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReporteServiciosPage } from './reporte-servicios.page';

describe('ReporteServiciosPage', () => {
  let component: ReporteServiciosPage;
  let fixture: ComponentFixture<ReporteServiciosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteServiciosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteServiciosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
