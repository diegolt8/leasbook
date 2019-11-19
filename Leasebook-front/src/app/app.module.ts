import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { LoginComponent } from './components/login/login.component';
import { SiginComponent } from './components/sigin/sigin.component';

@NgModule({
  declarations: [
    AppComponent,
    BookFormComponent,
    BookPreviewComponent,
    BookListComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    ServiciosComponent,
    LoginComponent,
    SiginComponent
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
