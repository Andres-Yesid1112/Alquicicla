import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EventosComponent } from './eventos/eventos.component';
import { RutasComponent } from './rutas/rutas.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CiclasAquiladasComponent } from './ciclas-aquiladas/ciclas-aquiladas.component';
import { environment } from 'src/environments/environment';

//servicios
import { BikeService } from './servises/bike.service';
import { FormsModule } from '@angular/forms';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { LeafletComponent } from './leaflet/leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EventosComponent,
    RutasComponent,
    CompetenciasComponent,
    MenuComponent,
    FooterComponent,
    UsuarioComponent,
    CiclasAquiladasComponent,
    MenuInicioComponent,
    LeafletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    BikeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
