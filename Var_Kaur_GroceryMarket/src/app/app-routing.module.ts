import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentListComponent } from './content-list/content-list.component';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { ContentdetailComponent } from './contentdetail/contentdetail.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '', redirectTo:'/list', pathMatch:'full'
  },
  {
    path: 'list', component: ContentListComponent
  },
  {
    path: 'detail/:id', component: ContentdetailComponent
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {

}
