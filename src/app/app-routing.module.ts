import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './register/add-person/add-person.component';
import { WinerComponent } from './raffle/winer/winer.component';

const routes: Routes = [
  {
    path: '',
    component: AddPersonComponent,
    pathMatch: 'full'
  },
  {
    path: 'winer',
    component: WinerComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
