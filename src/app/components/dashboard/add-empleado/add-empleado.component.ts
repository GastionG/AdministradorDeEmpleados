import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { EmpleadosComponent } from '../empleados/empleados.component';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {
  
  constructor(
    private fb: FormBuilder,
    private empleadoService: EmpleadoService,
    private empleados: EmpleadosComponent
  ) { }


  form = this.fb.group({
    name: ['', Validators.required],
    position: ['', Validators.required],
    office: ['', Validators.required],
    salary: ['', Validators.required],
  })

  ngOnInit(): void {
  }

  enter(){
    console.log(this.form.value);
    const empleado: Empleado = this.form.value
    this.empleadoService.postEmpleado(empleado).subscribe(data => {
      console.log(data);
      this.empleados.cargarEmpleados()
    })
    
  }


}
