import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.html',
})
export class LoginPage {

  // Señal para errores
  errorMsg = signal('');

  // Usuario quemado
  USER = {
    email: 'usuario@ups.edu.ec',
    password: '123456'
  };

  // Declaración del form
  form: any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    // Inicialización del formulario DENTRO del constructor
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Método login
  login() {
    const { email, password } = this.form.value;

    if (email === this.USER.email && password === this.USER.password) {
      this.errorMsg.set('');
      this.router.navigate(['/home']);
    } else {
      this.errorMsg.set('Credenciales incorrectas');
    }
  }
}
