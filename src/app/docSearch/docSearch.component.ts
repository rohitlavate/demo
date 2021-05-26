import { Component, OnInit } from "@angular/core";
import { DocSearchService } from "./doc-search.service";
import { Document } from '../model/doc.model'
import { FormControl } from "@angular/forms";

@Component({
    selector: 'doc-search',
    templateUrl: './doc-search.component.html',
    styleUrls: ['./doc-search.css']
})
export class DocSearchComponent implements OnInit {
    documents;
    searchTerm;
    constructor(private docSearch: DocSearchService){}

    ngOnInit(){
       this.documents = this.docSearch.getDocuments();
    }
}