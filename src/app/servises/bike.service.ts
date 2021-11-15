import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Bike } from '../models/bike';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  bikeList: AngularFireList<any> = this.firebase.list('bikes');
  disponibles: AngularFireList<any> = this.firebase.list('Disponibles');
  selectedBike: Bike = new Bike();
  nombreU: string = "";
  radioBike: string = "0";
  color: string = "";
  destino: string = "";
  dias: string = "0";
  fechaA: string = "";
  crossD: number = 0;
  mountainD: number = 0;
  rutaD: number = 0;

  seleccion: string = "";



  public bicisRadios: {
    tipo: string,
    marca: string
  }[] = [
    {
      tipo: 'cross',
      marca: 'bmx'
    },
    {
      tipo: 'mountain bike',
      marca: 'bmc'
    },
    {
      tipo: 'ruta',
      marca: 'Pinarello'
    }
  ]

  constructor(private firebase: AngularFireDatabase,private auth: AngularFireAuth) { }

  getBikes()
  {
    return this.bikeList = this.firebase.list('bikes');
  }
  getDisp()
  {
    return this.disponibles = this.firebase.list('Disponibles');
  }

  
  insertBike(bike: Bike)
  {
    this.bikeList.push({
      nombreUsuario: this.nombreU,
      marca: this.bicisRadios[parseInt(this.radioBike)].marca,
      tipo: this.bicisRadios[parseInt(this.radioBike)].tipo,
      color: this.color,
      destino: this.destino,
      diasAquilar: parseInt(this.dias),
      fechaAlquilacion: this.fechaA
    });
    if(this.bicisRadios[parseInt(this.radioBike)].tipo == "cross"){
      if(this.crossD <= 0){
        this.seleccion = "cross";
      }else{
        this.seleccion = "cross";
        this.disponibles.update("-MmGDCNSvtjDE0Z5APtx",{
          cross: this.crossD -1,
          mountain: this.mountainD,
          ruta: this.rutaD
        });
      }
    }else if(this.bicisRadios[parseInt(this.radioBike)].tipo == "mountain bike"){
      if(this.mountainD <= 0){
        this.seleccion = "mountain bike";
      }else{
        this.seleccion = "mountain bike";
        this.disponibles.update("-MmGDCNSvtjDE0Z5APtx",{
          cross: this.crossD,
          mountain: this.mountainD -1,
          ruta: this.rutaD
        });
      }
    }else if(this.bicisRadios[parseInt(this.radioBike)].tipo == "ruta"){
      if(this.rutaD <= 0){
        this.seleccion = "ruta";
      }else{
        this.seleccion = "ruta";
        this.disponibles.update("-MmGDCNSvtjDE0Z5APtx",{
          cross: this.crossD,
          mountain: this.mountainD,
          ruta: this.rutaD -1
        });
      }
    }
  }

  updateBike(bike:Bike)
  {
    this.bikeList.update(bike.$key,{
      marca: bike.marca,
      tipo: bike.tipo,
      color: bike.color
    })
  }

  deleteBike( $key: string )
  {
    this.bikeList.remove($key);
  }

  enUsuario(): void {
    this.auth.onAuthStateChanged((user) => {
      console.log('ha iniciado sesion');
      console.log(user);
      this.nombreU = user ? (user.displayName !== null ? user.displayName : '') : '';
    })
  }
}
