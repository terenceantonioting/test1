import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViewInformationComponent } from './detail-view-information.component';

describe('DetailViewInformationComponent', () => {
  let component: DetailViewInformationComponent;
  let fixture: ComponentFixture<DetailViewInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailViewInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailViewInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
