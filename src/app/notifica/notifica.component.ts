import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component'

@Component({
  selector: 'app-notifica',
  templateUrl: './notifica.component.html',
  styleUrls: ['./notifica.component.css']
})
export class NotificaComponent implements OnInit {
  @Input() selezioneC: Post;
  constructor() { }
  clean() {
    this.selezioneC.testo = undefined;
  }
  ngOnInit() {
  }
}