import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-litebox',
  templateUrl: './litebox.component.html',
  styleUrls: ['./litebox.component.scss']
})
export class LiteboxComponent implements OnInit {

  @Input() item;
  @Output() closeLitebox = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  close (event) {
    const { target } = event;
    if (target.matches('.litebox')) {
      this.closeLitebox.emit()
    }
  }

}
