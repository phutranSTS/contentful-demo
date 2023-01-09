import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../services/seo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  constructor(
    private contentfulService: ContentfulService,
    private seoService: SeoService,
    private route: ActivatedRoute
  ) {}

  products$: Observable<any> | undefined;

  ngOnInit(): void {
    this.seoService.setData({
      title: 'shoes store',
      description: 'shoes store description',
      author: 'phutranviet',
      type: 'shopping',
      published: new Date().toString(),
    });
    this.products$ = this.contentfulService.getAllProducts();
  }
}
