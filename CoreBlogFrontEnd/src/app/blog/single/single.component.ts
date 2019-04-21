import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  public postId: number;

  constructor(private route: ActivatedRoute) {
    // tslint:disable-next-line:no-string-literal
    this.postId = this.route.snapshot.params['id'] as number;
    console.log('id: ' + this.postId);
    // // tslint:disable-next-line:no-string-literal
    // let title = this.route.snapshot.params['title'] as string;

   }

  ngOnInit() {
  }
}
