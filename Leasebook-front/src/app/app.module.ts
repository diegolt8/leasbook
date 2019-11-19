import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BookFormComponent,
    BookPreviewComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
