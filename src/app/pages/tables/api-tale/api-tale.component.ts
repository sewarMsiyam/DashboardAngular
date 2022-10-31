import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/service/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-tale',
  templateUrl: './api-tale.component.html',
  styleUrls: ['./api-tale.component.css']
})
export class ApiTaleComponent implements OnInit {

  Product: Product[] = [];
  Product$ : Observable<Product[]> |undefined;
  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.listproducts();
  }

  listproducts(){
    this.ProductService.getAll()
    .subscribe({
      next: (data) => {
        this.Product = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }


  delete(Product:any){
    console.log(Product);
    this.ProductService.delete(Product).subscribe({
      next: (data) => {
        console.log(data+"ssssssssssssss");
        this.Product = data;
        console.log(data+"111");
      },
      error: (e) => console.error(e)
    });
  }

  View(Product:any){
    console.log(Product)
  }






}
