import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilterWithTypePipe } from './filter-with-type.pipe';
import { FilterWithContentPipe } from './filter-with-content.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { HoverAffectDirective } from './hover-affect.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterWithTypePipe,
    FilterWithContentPipe,
    ContentListComponent,
    ContentCardComponent,
    HoverAffectDirective
     
     

  ],
  exports: [
    ContentCardComponent,
    HoverAffectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
