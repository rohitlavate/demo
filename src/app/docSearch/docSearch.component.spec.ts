import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CardFilter } from "./cardFilter.pipe";
import { DocSearchService } from "./doc-search.service";
import { DocSearchComponent } from "./docSearch.component";
@Component({
    selector: 'card',
    template: '<div></div>'
})
class CardComponent{};

describe('DocSearch component testing', ()=> {
    let dataSource = {
        'All': [{'title':'Terminal Instructables', 'category': 'Technical', 'catColor': '#f2e6f2'},
        {'title':'Installation Guides', 'category': 'Technical', 'catColor': '#f2e6f2'},
        {'title':'Career Opportunities', 'category': 'Human Resource', 'catColor': '#bff2e6'},
        {'title':'Customer Onboarding', 'category': 'Financial', 'catColor': '#ebf0e4'}],
        'Financial': [{'title':'Customer Onboarding', 'category': 'Financial', 'catColor': '#ebf0e4'}],
        'Human Resource': [{'title':'Career Opportunities', 'category': 'Human Resource', 'catColor': '#bff2e6'}],
        'Technical': [{'title':'Terminal Instructables', 'category': 'Technical', 'catColor': '#f2e6f2'},
        {'title':'Installation Guides', 'category': 'Technical', 'catColor': '#f2e6f2'}]
    };
    let docSearchServiceSpy;
    let component: DocSearchComponent;
    let fixture: ComponentFixture<DocSearchComponent>;
    beforeEach(async(() => {
        docSearchServiceSpy = jasmine.createSpyObj('DocSearchService', ['getDocuments']);
        docSearchServiceSpy.getDocuments.and.returnValue(dataSource);
        TestBed.configureTestingModule({
            imports: [NgbModule,BrowserAnimationsModule,
                MatTabsModule,],
            declarations: [DocSearchComponent, CardComponent, CardFilter],
            providers: [{provide: DocSearchService, useValue: docSearchServiceSpy}],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(DocSearchComponent);
            component = fixture.componentInstance;
        });
    }));

    it('should test instance', () => {
        expect(component).toBeTruthy();
    });
    
    it('should test class variables', ()=> {
        fixture.detectChanges();
        expect(component.documents).toEqual(dataSource);
    })
});
