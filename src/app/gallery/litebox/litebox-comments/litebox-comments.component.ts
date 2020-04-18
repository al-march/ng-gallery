import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '@app/gallery/gallery';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-litebox-comments',
  templateUrl: './litebox-comments.component.html',
  styleUrls: ['../litebox.component.scss']
})
export class LiteboxCommentsComponent implements OnInit {

  @Input() comments: Comment[];

  showComments = false;

  faChevronDown = faChevronDown;

  constructor() { }

  ngOnInit(): void {

  }

}
