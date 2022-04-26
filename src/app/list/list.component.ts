import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UiService } from '../services/ui.service';
import { Post } from '../Interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  posts: Post[] = [];

  constructor(private api: ApiService, private ui: UiService) {}

  ngOnInit(): void {
    this.api.getPosts().subscribe((posts) => (this.posts = posts));
  }

  trackbyfn(i: number, p: Post) {
    return p.id;
  }

  DeleteHandler(id: any) {
    this.api.deletePost(id).subscribe({
      next: () => {
        this.ui.setAlert({ msg: 'post has been deleted', type: 'Y' });
        this.posts = this.posts.filter((p) => p.id !== id);
      },
      error: () => {
        this.ui.setAlert({
          msg: 'an error ouccerd!',
          type: 'N',
        });
      },
    });
  }
}
