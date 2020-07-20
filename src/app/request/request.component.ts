import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Book {
  id: number;
  title: string;
  author: string;
}

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.less'],
})
export class RequestComponent implements OnInit {
  constructor(private http: HttpClient) {}

  books: Book[] = [];

  ngOnInit(): void {
    this.http.get<Book[]>('http://localhost:3000/posts').subscribe((res) => {
      this.books = res;
    });
  }
}
