import { Injectable } from "@angular/core";
import { DocumentRepository } from "src/app/model/document.repository";

@Injectable()
export class DocSearchService {
    constructor(private docRepo: DocumentRepository){
    }

    getDocuments() {
        return this.docRepo.getDocuments();
    }
}