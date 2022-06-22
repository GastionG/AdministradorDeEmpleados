import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  displayedColumns: string[] = ['a', 'b', 'c', 'd', 'e'];
  
  dataArray: any;
  empleadoBandera: any;
  empleadoBanderaId: any;
  empleados: any;
  editando = false
  constructor(
    private empleadosService: EmpleadoService,  
    private fb: FormBuilder
  ) { }
  
  form = this.fb.group({
    name: ['', Validators.required],
    position: ['', Validators.required],
    office: ['', Validators.required],
    salary: ['', Validators.required],
  })


  ngOnInit(): void {
    this.cargarEmpleados()    

  }

  cargarEmpleados(){
    this.empleadosService.getEmpleados().subscribe(data => {
      console.log(data);
      this.empleados = data;
      this.dataArray = new MatTableDataSource(this.empleados);
      this.dataArray.paginator = this.paginator;
    })
  }

  editarEmpleado(empleado: Empleado){
    this.editando = true;
    this.empleadoBandera = empleado;
    this.empleadoBanderaId = this.empleadoBandera._id
    console.log(this.empleadoBandera);

    this.form.controls['name'].setValue(this.empleadoBandera.name);
    this.form.controls['position'].setValue(this.empleadoBandera.position);
    this.form.controls['office'].setValue(this.empleadoBandera.office);
    this.form.controls['salary'].setValue(this.empleadoBandera.salary);
    
  }

  cancelarEditarEmpleado(){ 
    this.editando = false
    this.empleadoBanderaId = '';
    this.form.reset()
  }

  enviarEdicion(){
    const res = confirm('Seguro que quieres editar empleado?')
    if(res){
      this.empleadosService.editEmpleado(this.empleadoBanderaId, this.form.value).subscribe(data => {
        console.log(data);
        this.editando = false
        this.empleadoBanderaId = null;
        this.cargarEmpleados()
      })
    }
    
  }

  eliminarEmpleado(id: string){
    const res = confirm('Seguro que quieres eliminar empleado?')
    if(res){
      this.empleadosService.deleteEmpleado(id).subscribe(data => {
        console.log(data);
        this.cargarEmpleados()
        
      })
    }
  }

  aplicarFiltro(event: Event){
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataArray.filter = filterValue.trim().toLowerCase();


  }

}
