import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-litebox',
  templateUrl: './litebox.component.html',
  styleUrls: ['./litebox.component.scss']
})
export class LiteboxComponent implements OnInit {

  @Input() item;
  @Output() close = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}
