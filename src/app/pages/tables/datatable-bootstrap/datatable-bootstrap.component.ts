import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-datatable-bootstrap',
  templateUrl: './datatable-bootstrap.component.html',
  styleUrls: ['./datatable-bootstrap.component.css']
})
export class DatatableBootstrapComponent implements OnInit {


  Title ="Title one";
  @ViewChild('dtable',{static:false}) dataTabe: any;

  ngAfterViewInit(): void {
    $(this.dataTabe.nativeElement).DataTable();
  }

  ngOnInit(): void {
  }

}
