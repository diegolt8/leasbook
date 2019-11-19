import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book } from '../interfaces/Book'

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  URI = 'http://localhost:3000/api/publication'

  constructor(private http: HttpClient) { }

  register(name: string, description: string, synopsis: string,
    publication_date: Date, add_photo: File, editorial: string, autor: string, genre: string) {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('description', description);
    fd.append('synopsis', synopsis);
    fd.append('publication_date', publication_date.toString());
    fd.append('add_photo', add_photo);
    fd.append('editorial', editorial);
    fd.append('autor', autor);
    fd.append('genre', genre);
    return this.http.post(this.URI, fd);
  }

  getBooks() {
    return this.http.get<Book[]>(this.URI);
  }

  getBook(id: string) {
    return this.http.get<Book>(`${this.URI}/${id}`);
  }


  deleteBook(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  update(id: string, name: string, description: string, synopsis: string,
    publication_date: Date, autor: string, genre: string, editorial: string) {
    return this.http.put(`${this.URI}/${id}`, {name, description, synopsis, publication_date, editorial, autor, genre});
 }
}
