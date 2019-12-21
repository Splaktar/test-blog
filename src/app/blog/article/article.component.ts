import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated
})
export class ArticleComponent implements OnInit {
  ngOnInit() {
  }

  constructor(private router: Router, private route: ActivatedRoute) {
  }
}
