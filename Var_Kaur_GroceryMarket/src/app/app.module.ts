import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./services/in-memory-data.service";
import { FilterWithTypePipe } from './filter-with-type.pipe';
import { FilterWithContentPipe } from './filter-with-content.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagessComponent } from './messagess/messagess.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { ModifycontentformComponent } from './modifycontentform/modifycontentform.component';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';

 

 
@NgModule({
  declarations: [
    AppComponent,
    FilterWithTypePipe,
    FilterWithContentPipe,
    ContentListComponent,
    ContentCardComponent,
    HoverAffectDirective,
    MessagessComponent,
    ModifyContentComponentComponent,
    ModifycontentformComponent
     
     

  ],
  exports: [
    ContentCardComponent,
    HoverAffectDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      delay: 1000
    }),
    MatButtonModule, // Move MatButtonModule to the imports array
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
  ],

	
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
