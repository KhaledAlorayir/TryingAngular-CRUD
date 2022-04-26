import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../Interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() p!: Post;
  @Output() onDeleteHandler = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  click() {
    this.onDeleteHandler.emit();
  }
}
