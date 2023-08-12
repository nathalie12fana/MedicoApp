import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAudienceComponent } from './modifier-audience.component';

describe('ModifierAudienceComponent', () => {
  let component: ModifierAudienceComponent;
  let fixture: ComponentFixture<ModifierAudienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierAudienceComponent]
    });
    fixture = TestBed.createComponent(ModifierAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
