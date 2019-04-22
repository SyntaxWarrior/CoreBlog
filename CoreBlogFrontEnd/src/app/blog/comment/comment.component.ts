import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() public pageId: string;

  constructor() { }

  ngOnInit() {
  }
}
