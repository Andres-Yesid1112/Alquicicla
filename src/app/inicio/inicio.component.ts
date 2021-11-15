import { Component, OnInit } from '@angular/core';
import { BikeService } from '../servises/bike.service';
import { NgForm } from '@angular/forms';
import { Bike } from '../models/bike';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  bikeList!: Bike[];
  bikeDisp!: Bike[];
  public dialogoDisp:boolean =  false;
  public dialogoAlqui:boolean =  false;
  public bikesInsuficients = "";

  constructor(public bikeService: BikeService) {
    this.bikeService.enUsuario();
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
    this.bikeService.getDisp()
    .snapshotChanges()
    .subscribe(item =>{
      this.bikeDisp = [];
      item.forEach(element =>{
        let x:any = element.payload.toJSON();
        x["$key"] = element.key;
        this.bikeDisp.push(x as Bike);
        this.enviarValores();
      });
    });
  }

  onSubmit( bikeForm: NgForm)
  {
    this.bikeService.insertBike(bikeForm.value);
    if(this.bikeService.seleccion == "cross" && this.bikeService.crossD == 0){
      this.bikesInsuficients = this.bikeService.seleccion;
      this.dialogoDisp = true;

    }else if(this.bikeService.seleccion == "mountain bike" && this.bikeService.mountainD == 0){
        this.bikesInsuficients = this.bikeService.seleccion;
        this.dialogoDisp = true;

    }else if(this.bikeService.seleccion == "ruta" && this.bikeService.rutaD == 0){
        this.bikesInsuficients = this.bikeService.seleccion;
        this.dialogoDisp = true;
    }else{
      this.dialogoAlqui = true;
    }
    

    
  }

  enviarValores(): void {
    this.bikeService.crossD = this.bikeDisp[0].cross;
    this.bikeService.mountainD = this.bikeDisp[0].mountain;
    this.bikeService.rutaD = this.bikeDisp[0].ruta;
  }

}
