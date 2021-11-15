import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CiclasAquiladasComponent } from './ciclas-aquiladas/ciclas-aquiladas.component';
import { EventosComponent } from './eventos/eventos.component';
import { RutasComponent } from './rutas/rutas.component';
import { CompetenciasComponent } from './competencias/competencias.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';

import { LeafletComponent } from './leaflet/leaflet.component';

const routes: Routes = [
  {path: '', component: MenuInicioComponent
  },
  {path: 'mapa', component: LeafletComponent
  },
  {path: 'alquilar', component: InicioComponent
  },
  {path: 'ciclasAlquiladas', component: CiclasAquiladasComponent

  },
  {path: 'eventos', component: EventosComponent

  },
  {path: 'rutas', component: RutasComponent

  },
  {path: 'competencias', component: CompetenciasComponent

  },
  {path: 'cuenta', component: UsuarioComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
