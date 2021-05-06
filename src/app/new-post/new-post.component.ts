import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Output() newPostEvent = new EventEmitter<Object>();
  constructor() { }
  newPost(titolo: string, testo: string) {
    this.newPostEvent.emit({titolo, testo});
  }
  ngOnInit() {
  }
}