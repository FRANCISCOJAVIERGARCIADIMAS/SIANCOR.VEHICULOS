import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RevisionNivelCombustiblePage } from './revision-nivel-combustible.page';

describe('RevisionNivelCombustiblePage', () => {
  let component: RevisionNivelCombustiblePage;
  let fixture: ComponentFixture<RevisionNivelCombustiblePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisionNivelCombustiblePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RevisionNivelCombustiblePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
