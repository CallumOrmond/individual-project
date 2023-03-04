import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';

import { InfoSidebarComponent } from './info-sidebar.component';

describe('InfoSidebarComponent', () => {
  let component: InfoSidebarComponent;
  let fixture: ComponentFixture<InfoSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSidebarComponent ],
      imports: [MatDialogModule, RouterTestingModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
