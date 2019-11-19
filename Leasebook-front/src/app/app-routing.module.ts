import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component'
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
