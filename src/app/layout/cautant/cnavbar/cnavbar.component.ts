import { Component,  EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cnavbar',
  templateUrl: './cnavbar.component.html',
  styleUrls: ['./cnavbar.component.css']
})
export class CnavbarComponent implements OnInit {
  constructor(private renderer: Renderer2) { }
  display:boolean |undefined ;
  display2:boolean |undefined ;



  ngOnInit(): void {
    this.display=false;
    this.display2=true;
  }

  mode(){
    if(this.display == true){
      this.display2=true;
      this.display=false;
    }else if(this.display2 == true){
      this.display2=false;
      this.display=true;
    }
  }

  @Output() showsidebarsmool: EventEmitter<boolean> = new EventEmitter<boolean>();
  showsidebar: boolean = false;

  showmenuesmool(){
    // console.log(this.showsidebar);
    // this.showsidebar =!this.showsidebar;
    // console.log(this.showsidebar);
    this.showsidebarsmool.emit(this.showsidebar);
  }


}
