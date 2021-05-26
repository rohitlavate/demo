import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DataSource } from "./dataSource";
import { DocumentRepository } from "./document.repository";

@NgModule({
    providers: [DataSource, DocumentRepository]
})
export class ModelModule {}