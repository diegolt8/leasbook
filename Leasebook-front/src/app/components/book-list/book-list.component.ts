import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../../services/book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books = [];

  constructor(private bookService: BookServiceService, private router: Router) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      res => {
        this.books = res;
      }, err => console.log(err)
    )
  }

  selectedCard(id: string) {
    this.router.navigate(['/books', id]);
  }

}
