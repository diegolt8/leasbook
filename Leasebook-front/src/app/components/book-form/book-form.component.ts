import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookServiceService } from '../../services/book-service.service'

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;

  constructor(private bookService: BookServiceService, private router: Router) { }

  ngOnInit() {
  }

  onSelectedPhoto(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      //mostrar imagen
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  register(name: HTMLInputElement, description: HTMLInputElement, synopsis: HTMLInputElement,
    publication_date: HTMLInputElement, autor: HTMLInputElement,
    editorial: HTMLInputElement, genre: HTMLInputElement): boolean {
    this.bookService.register(name.value, description.value, synopsis.value, publication_date.valueAsDate,
      this.file, editorial.value, autor.value, genre.value).subscribe(
        res => {
          this.router.navigate(['/books']);
        }, err => console.log(err)
      )
    return false;
  }

}
