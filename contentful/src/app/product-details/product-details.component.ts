import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../services/contentful.service';
import { SeoService } from '../services/seo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<any> | undefined;
  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {}
  productName: string | undefined;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.productName = params['productName'];
      this.product$ = this.contentfulService.getEntryById(id);
      this.product$.subscribe((res) => console.log(res));

      this.seoService.setData({
        title: this.productName,
        description: 'shoes store description',
        author: 'phutranviet',
        type: 'shopping',
        published: new Date().toString(),
      });
    });
  }
}
