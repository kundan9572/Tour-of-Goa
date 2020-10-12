import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoaComponent } from './goa/goa.component';

const routes: Routes = [
  {path:'goa' , component: GoaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
