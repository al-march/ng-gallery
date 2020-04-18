import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '@app/gallery/gallery';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GalleryService } from '@app/gallery/gallery.service';

@Component({
  selector: 'app-litebox-comments',
  templateUrl: './litebox-comments.component.html',
  styleUrls: ['../litebox.component.scss']
})
export class LiteboxCommentsComponent implements OnInit {

  @Input() id: number;
  @Input() comments: Comment[];
  @Input() showComments: boolean;

  @Output() closeComments = new EventEmitter

  form: FormGroup;

  faChevronDown = faChevronDown;

  constructor(private formBuilder: FormBuilder, private service: GalleryService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      autor: [null, Validators.required],
      value: [null, Validators.required]
    })
  }

  onSubmit() {
    const comment: Comment = this.form.value;
    this.service.setComment(this.id, comment);
    this.form.reset()
  }

}
