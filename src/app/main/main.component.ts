import { Component, OnInit } from '@angular/core';
import { BusSchedule } from '../transit';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  property: string = 'Car'
  arrayProp: string[] = ["Car", "Bus"]
  schedule: BusSchedule[] = [
    {route: "4 Cornwall Rd E Clarkson GO via Oakville", depart: "14:57", arrive: "15:25"},
    {route: "19 Uptown Core via River Oaks", depart: "15:19", arrive: "15:45"}
  ]

  setCar() {}

  setBus() {}

  constructor() {}

  ngOnInit() {}

}



