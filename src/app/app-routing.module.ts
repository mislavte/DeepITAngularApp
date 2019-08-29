import { GradDetailComponent } from './grad/grad-detail/grad-detail.component';
import { DrzavaDetailComponent } from './drzava/drzava-detail/drzava-detail.component';
import { GradComponent } from './grad/grad.component';
import { DrzavaComponent } from './drzava/drzava.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'drzava',  component: DrzavaComponent, data: { animation: 'list' } },
  { path: 'drzavaEditNew/:id',  component: DrzavaDetailComponent, data: { animation: 'detail' } },
  { path: 'drzavaEditNew',  component: DrzavaDetailComponent, data: { animation: 'detail' } },
  { path: 'gradEditNew/:id',  component: GradDetailComponent, data: { animation: 'detail' } },
  { path: 'gradEditNew',  component: GradDetailComponent, data: { animation: 'list' } },
  { path: 'grad', component: GradComponent, data: { animation: 'list' } }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
