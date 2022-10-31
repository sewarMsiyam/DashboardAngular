import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Menusidebar} from './menusidebar';

const Menue =[
  new Menusidebar(
    'home',
    'fa-solid fa-house',
    '/home'
  ),
  new Menusidebar(
    'Datatable Bootstrap',
    'fa-solid fa-table',
    'Table/DatatableBootstrap'
  ),
  new Menusidebar(
    'Datatable Api',
    'fa-solid fa-table',
    'Table/DatatableApi'
  ),
  new Menusidebar(
    'Calendar',
    'fa-solid fa-calendar-days',
    'Calendar'
  ),
  new Menusidebar(
    'Angular',
    'fa-solid fa-house',
    '/e'
  ),
  new Menusidebar(
    'Angular2',
    'fa-solid fa-house',
    '/s'
  ),
  new Menusidebar(
    'Angular3',
    'fa-solid fa-house',
    '/rr'
  ),
  new Menusidebar(
    'Angular4',
    'fa-solid fa-house',
    '/ss'
  ),
  new Menusidebar(
    'Angular',
    'fa-solid fa-house',
    '/y'
  ),
  new Menusidebar(
    'Angular2',
    'fa-solid fa-house',
    '/bbb'
  ),
  new Menusidebar(
    'Angular3',
    'fa-solid fa-house',
    '/rr'
  ),
  new Menusidebar(
    'Angular4',
    'fa-solid fa-house',
    '/ss'
  ),
  new Menusidebar(
    'Angular',
    'fa-solid fa-house',
    '/p'
  ),
  new Menusidebar(
    'Angular2',
    'fa-solid fa-house',
    '/bbb'
  ),
  new Menusidebar(
    'Angular3',
    'fa-solid fa-house',
    '/rr'
  ),
  new Menusidebar(
    'Angular4',
    'fa-solid fa-house',
    '/ss'
  ),
];

const MenueList$ = of(Menue);
@Injectable({
  providedIn: 'root'
})
export class MenusidebarService {

  constructor() { }
  getALL():Observable<Menusidebar[]>{
    return MenueList$;
  }
}
//path iconsolid items
