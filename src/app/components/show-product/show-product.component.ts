import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.scss']
})
export class ShowProductComponent implements OnInit {

  @Input() products: Product[];
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(product: Product): void{

  }

  onDelete(product: Product): void {

  }

  addProduct(): void {

  }
}
