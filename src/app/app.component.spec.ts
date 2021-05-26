import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DocSearchService } from './docSearch/doc-search.service';
import { DocSearchComponent } from './docSearch/docSearch.component';
import { HeaderComponent } from './header/header.component';

describe('AppComponent', () => {
  let docSearchServiceSpy;
  beforeEach(async(() => {
    docSearchServiceSpy = jasmine.createSpyObj('DocSearchService', ['getDocuments']);
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        DocSearchComponent
      ],
      providers: [{provide: DocSearchService, useValue: docSearchServiceSpy}],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FiservDocs'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('FiservDocs');
  });
});
