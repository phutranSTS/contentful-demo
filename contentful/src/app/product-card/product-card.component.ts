import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor() {}

  @Input() type: 'horizontal' | 'vertical' = 'vertical';
  @Input() showBuyButton: boolean | undefined;
  @Input() product: any;

  ngOnInit(): void {}
}
