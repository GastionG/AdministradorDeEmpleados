import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  cargando = false

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}

  form = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]

  })

  ngOnInit(): void {
  }

  enter(){
    const usuario = this.form.value.usuario
    const password = this.form.value.password
    console.log(usuario, password);
    
    if(usuario == 'a' && password == '123'){
      this.cargaFalsa()
    }
    else{
      this.error()
    }
  }

  error(){
    this.snackbar.open('Error, el usuario es "a" y la contraseña es "123"', '', {
      duration: 5000
    })
    this.form.reset()
  }

  cargaFalsa(){
    this.cargando = true
    setTimeout(() => {
      this.router.navigate(['tablero'])
    }, 2000);

  }
}
