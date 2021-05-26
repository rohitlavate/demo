import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DocSearchComponent } from './docSearch/docSearch.component';
import { CommonModule } from '@angular/common';
import { MatTabsModule} from '@angular/material/tabs';
import { ModelModule } from './model/model.module';
import { DocSearchService } from './docSearch/doc-search.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './docSearch/card/card.component';
import { FormsModule } from '@angular/forms';
import { CardFilter } from './docSearch/cardFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DocSearchComponent,
    CardComponent,
    CardFilter
  ],
  imports: [
    CommonModule, FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ModelModule,
    NgbModule
  ],
  providers: [DocSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
