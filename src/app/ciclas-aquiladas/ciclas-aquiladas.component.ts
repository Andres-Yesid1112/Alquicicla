import { Component, OnInit } from '@angular/core';
import { BikeService} from '../servises/bike.service'

import { Bike } from '../models/bike'

@Component({
  selector: 'app-ciclas-aquiladas',
  templateUrl: './ciclas-aquiladas.component.html',
  styleUrls: ['./ciclas-aquiladas.component.css']
})
export class CiclasAquiladasComponent implements OnInit {

  bikeList!: Bike[];

  constructor( public bikeService: BikeService) { 

  }

  ngOnInit(): void {
    this.bikeService.getBikes()
    .snapshotChanges()
    .subscribe(item =>{
      this.bikeList = [];
      item.forEach(element =>{
        let x:any = element.payload.toJSON();
        x["$key"] = element.key;
        this.bikeList.push(x as Bike);
      });
    });
  }

}
