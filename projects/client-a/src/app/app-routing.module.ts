import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAComponent } from './home-a/home-a.component';

const routes: Routes = [{
  path:'',
  component: HomeAComponent
},
{
  path:'client-a',
  loadChildren:() => import('./show/show.module').then((m)=>m.ShowModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
