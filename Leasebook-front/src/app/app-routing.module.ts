import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component'
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import {ServiciosComponent} from './components/servicios/servicios.component';
import {LoginComponent} from './components/login/login.component';
import {SiginComponent} from './components/sigin/sigin.component';



const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/new',
    component: BookFormComponent
  },
  {
    path: 'books/:id',
    component: BookPreviewComponent
  },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  {
    path:"books",
 component:BookListComponent
  
  },
  {
    path:"servicios",
    component:ServiciosComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"registro",
    component:SiginComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo: 'books'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
