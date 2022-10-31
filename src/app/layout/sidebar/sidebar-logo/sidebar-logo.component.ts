import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-logo',
  templateUrl: './sidebar-logo.component.html',
  styleUrls: ['./sidebar-logo.component.css']
})
export class SidebarLogoComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Output() Zoom_inaout: EventEmitter<boolean> = new EventEmitter<boolean>();

  colorsbox: boolean = false;
  Zoominaout() {
    this.colorsbox = !this.colorsbox;
    this.Zoom_inaout.emit(this.colorsbox);
  }


}
