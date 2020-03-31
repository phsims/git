import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { RepoListComponent } from './repo-list.component';
import {mockList} from '../testing/test-data';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [RepoListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit() ', () => {
    spyOn(component, 'onSubmit');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(component.onSubmit).toHaveBeenCalled();
  })

  it('should NOT disply list if results are empty ', () => {
    component.repoList = null;
    const el = fixture.debugElement.query(By.css('#repoList'));
    fixture.detectChanges();
    expect(el).toBeFalsy();
  })

  it('should disply list if results are avaliable ', () => {
    component.repoList = mockList.items;
    fixture.detectChanges();
    const el = fixture.debugElement.query(By.css('#repoList'));
    expect(el).toBeTruthy();
  })
});
