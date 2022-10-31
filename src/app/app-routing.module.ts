import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LayoutHomeComponent } from './pages/home/layout-home/layout-home.component';
import { DatatableBootstrapComponent } from './pages/tables/datatable-bootstrap/datatable-bootstrap.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ApiTaleComponent } from './pages/tables/api-tale/api-tale.component';
import { CreateComponent } from './pages/tables/api-tale/create/create.component';


const routes: Routes = [
  {path:'home',component : LayoutHomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:"Table/DatatableBootstrap", component:DatatableBootstrapComponent },
  { path:"Table/DatatableApi", component:ApiTaleComponent },
  { path:"Table/DatatableApi/Create", component:CreateComponent },
  { path:"Calendar", component:CalendarComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //app-home-cont //HomeContComponent
}
