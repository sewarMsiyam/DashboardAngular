import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { SidebarMenuComponent } from './layout/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarFooterComponent } from './layout/sidebar/sidebar-footer/sidebar-footer.component';
import { SidebarLogoComponent } from './layout/sidebar/sidebar-logo/sidebar-logo.component';
import { CautantComponent } from './layout/cautant/cautant.component';
import { CnavbarComponent } from './layout/cautant/cnavbar/cnavbar.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DatatableBootstrapComponent } from './pages/tables/datatable-bootstrap/datatable-bootstrap.component';
import { StatisticsComponent } from './pages/home/statistics/statistics.component';
import { ChartComponent } from './pages/home/chart/chart.component';
import { LayoutHomeComponent } from './pages/home/layout-home/layout-home.component';
import { NgChartsModule } from 'ng2-charts';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { ApiTaleComponent } from './pages/tables/api-tale/api-tale.component';
import { CreateComponent } from './pages/tables/api-tale/create/create.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

export function playerFactory() {
  return player;
}
FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin
])

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarMenuComponent,
    SidebarFooterComponent,
    SidebarLogoComponent,
    CautantComponent,
    CnavbarComponent,
    NotFoundPageComponent,
    DatatableBootstrapComponent,
    StatisticsComponent,
    ChartComponent,
    LayoutHomeComponent,
    CalendarComponent,
    ApiTaleComponent,
    CreateComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgChartsModule,
    CommonModule,
    FormsModule,
    LottieModule.forRoot({ player: playerFactory }),
    FullCalendarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
