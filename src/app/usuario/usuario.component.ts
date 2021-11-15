import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BikeService } from '../servises/bike.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  iniciar = false;
  constructor( private auth: AngularFireAuth, private router: Router, private bikeServe: BikeService) { }

  email!: string;
  password!: string;

  name2!: string;
  email2!: string;
  password2!: string;


  ngOnInit(): void {

  }
  cambiarI(): void{
    this.iniciar = true;
  }
  cambiarC(): void{
    this.iniciar = false;
  }

  login(): void{
    console.log(`${this.email}, ${this.password}`);
    this.auth.signInWithEmailAndPassword(this.email, this.password)
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    })
    .then((res) =>{
      console.log(res);
      if(res){
        this.router.navigate(['']);
      }
      
    })
  }
  crear(): void{
    console.log(`${this.name2}, ${this.email2},${this.password2}`);
    this.auth.createUserWithEmailAndPassword(this.email2, this.password2)
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    })
    .then((res) =>{
      console.log(res);
      if(res && res.user){
        res.user.updateProfile({
          displayName: `${this.name2}`
        })
        .then(() => {
          this.router.navigate(['']);
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
      }
      
    })
  }
}
