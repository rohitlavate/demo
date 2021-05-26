import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Document } from './doc.model';

@Injectable()
export class DataSource {
    private TECHCOLOR =  '#f2e6f2';
    private FINANCECOLOR = '#ebf0e4';
    private MARKETCOLOR = '#f5ecd5';
    private HRCOLOR = '#bff2e6';
    private HUMANRESOURCE = 'Human Resources';
    private TECHNICAL = 'Technical';
    private MARKETING = 'Marketing';
    private FINANCIAL = 'Financial';
    
    private documents: Document[] = [
        new Document(1,'Terminal Instructables', this.TECHNICAL, this.TECHCOLOR),
        new Document(2,'Installation Guides', this.TECHNICAL, this.TECHCOLOR),
        new Document(3,'Career Opportunities', this.HUMANRESOURCE, this.HRCOLOR),
        new Document(4,'Customer Onboarding', this.FINANCIAL, this.FINANCECOLOR),
        new Document(5,'Outlet Branding', this.MARKETING, this.MARKETCOLOR),
        new Document(6,'Accounting Procedure', this.FINANCIAL, this.FINANCECOLOR),
        new Document(7,'Training', this.HUMANRESOURCE, this.HRCOLOR),
        new Document(9,'Printing Guidance', this.MARKETING, this.MARKETCOLOR),
        new Document(10,'Technical Support', this.TECHNICAL, this.TECHCOLOR),
    ]

    getDocuments(): Observable<Document[]> {
        return from([this.documents]);
    }
    
}