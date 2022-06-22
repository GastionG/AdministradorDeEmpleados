import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empleado } from "../models/empleado";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URL_API = 'http://localhost:4000/empleados'

  constructor(
    private http: HttpClient
  ) { }


  getEmpleados(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.URL_API)
  }
  postEmpleado(empleadoData: Empleado): Observable<Empleado>{
    return this.http.post<Empleado>(this.URL_API, empleadoData)
  }
  deleteEmpleado(id: string){
    return this.http.delete(this.URL_API + '/' + id)
  }
  editEmpleado(id:string, empleadoData: Empleado): Observable<Empleado>{
    return this.http.put<Empleado>(this.URL_API + '/' + id, empleadoData)
  }
}
