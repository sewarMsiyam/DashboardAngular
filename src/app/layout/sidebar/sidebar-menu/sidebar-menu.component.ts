import { Component, Input, OnInit, Renderer2 } from "@angular/core";
import { Observable } from "rxjs";
import { Menusidebar } from "src/app/Data/menusidebar";
import { MenusidebarService } from "src/app/Data/menusidebar.service";

@Component({
  selector: "app-sidebar-menu",
  templateUrl: "./sidebar-menu.component.html",
  styleUrls: ["./sidebar-menu.component.css"]
})
export class SidebarMenuComponent implements OnInit {
  MenueList$! :Observable<Menusidebar[]>;
  constructor(private Menue:MenusidebarService) {}

  ngOnInit(): void {
    this.MenueList$=this.Menue.getALL();
    console.log(this.MenueList$);
  }

  private smsidemenu = false;
  private _colorsbox: boolean | any;
  get colorsbox(): boolean {
    return this._colorsbox;
  }
  @Input("Zoom_inaout") set colorsbox(value: boolean) {
    this._colorsbox = value;
    if (this._colorsbox) {
      this.smsidemenu = this._colorsbox;
    }
  }
}
