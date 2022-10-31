import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  Events = [];
  onDateClick(res:{dateStr:string}){
    alert("your click on" + res.dateStr)
  }

  calendarOptions !: CalendarOptions

  constructor(){}

  ngOnInit(): void {
    setTimeout(()=>{
      this.calendarOptions={
        initialView:'dayGridMonth',
        dateClick : this.onDateClick.bind(this),
        events:this.Events,
      }
    },3500)
  }




}
