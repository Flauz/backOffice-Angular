import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Response} from '../../models/response';
import {Product} from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];
  productSub;
  constructor(private productServices: ProductsService ) { }

  ngOnInit(): void {
    this.productSub = this.productServices.getProducts().subscribe(
      (response: Response) => {
        this.products = response.result;
        console.warn('here :', this.products);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
