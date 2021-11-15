import { Component, OnInit } from '@angular/core';
import { NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css']
})
export class LeafletComponent implements OnInit {
  title = 'locationApp';

  constructor() { }

  ngOnInit(): void {
    if(!navigator.geolocation){
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position)=>{
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
    })
  }

}
