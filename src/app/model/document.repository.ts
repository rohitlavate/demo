import { DataSource } from "./dataSource";
import { Injectable } from "@angular/core";
import { Document } from './doc.model';
import { VirtualTimeScheduler } from "rxjs";

@Injectable()
export class DocumentRepository {
    private categoris: string[] = [];
    private documents: Document[] = [];
    constructor(private dataSource: DataSource){
        this.dataSource.getDocuments().subscribe( (docs) => {
            this.documents = docs;
            this.categoris = docs.map( doc => doc.category);
        })
    }

    getCategories() {
        return this.categoris;
    }

    getAllDocuments() {
        return this.documents;
    }

    getDocuments() {
        let jsonDoc = {};
        for(let cat of this.categoris){
            let localArr = [];
            for(let doc of this.documents){
                if(doc.category === cat){
                    localArr.push(doc);
                }
            }
            jsonDoc[cat] = localArr;
        }
        jsonDoc['All'] = this.documents;
        return jsonDoc;
    }
}