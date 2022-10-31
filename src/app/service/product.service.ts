import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

const ApiUrl ="https://localhost:44355/api/Flutter/GetAll";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private HttpClient: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.HttpClient.get<Product[]>(ApiUrl);
  }
  get(id: any): Observable<Product> {
    return this.HttpClient.get<Product>(`${ApiUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.HttpClient.post(ApiUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.HttpClient.put(`${ApiUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.HttpClient.delete(`${ApiUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.HttpClient.delete(ApiUrl);
  }
  findByTitle(title: any): Observable<Product[]> {
    return this.HttpClient.get<Product[]>(`${ApiUrl}?title=${title}`);
  }
}
