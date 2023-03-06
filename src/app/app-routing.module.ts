import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { ListFormsComponent } from './list-forms/list-forms.component';

const routes: Routes = [
  { path: '', component: ListFormsComponent },
  { path: 'create', component: CreateFormComponent},
  { path: '**', redirectTo:'/' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
