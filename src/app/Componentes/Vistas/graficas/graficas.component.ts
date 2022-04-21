import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  single:[]|undefined;
  view: [number, number] = [500, 400];
 

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor() {
    //Object.assign(this, { single });
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
