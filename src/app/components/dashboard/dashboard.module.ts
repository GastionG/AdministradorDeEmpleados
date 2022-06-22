import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddEmpleadoComponent } from './add-empleado/add-empleado.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';





@NgModule({
  declarations: [
    DashboardComponent,
    EmpleadosComponent,
    NavbarComponent,
    AddEmpleadoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SharedModule
  ]
})
export class DashboardModule { }
