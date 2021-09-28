import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemNoSidebarComponent } from './item-no-sidebar.component';

describe('ItemNoSidebarComponent', () => {
  let component: ItemNoSidebarComponent;
  let fixture: ComponentFixture<ItemNoSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemNoSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNoSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
