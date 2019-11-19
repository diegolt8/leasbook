import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { BookServiceService } from '../../services/book-service.service'
import { Book } from '../../interfaces/Book';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {

  id: string;
  book: Book;

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookServiceService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.bookService.getBook(this.id).subscribe(res => {
        this.book = res;
      }, err => console.log(err)
      )
    })
  }

  deleteBook(id: string) {
    this.bookService.deleteBook(id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/books'])
      },
      err => console.log(err)

    )
  }

  updateBook(name: HTMLInputElement, description: HTMLTextAreaElement, synopsis: HTMLInputElement,
     publication_date: HTMLInputElement, autor: HTMLInputElement, genre: HTMLInputElement, editorial: HTMLInputElement): boolean{
      this.bookService.update(this.id, name.value, description.value, synopsis.value,
         publication_date.valueAsDate, editorial.value, autor.value, genre.value).subscribe(
           res => {
            this.router.navigate(['/books']);
           },
           err => console.log(err)
         )
         return false;
  }

}
