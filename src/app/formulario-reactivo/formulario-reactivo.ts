import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-reactivo.html',
  styleUrl: './formulario-reactivo.css'
})
export class FormularioReactivoComponent implements OnInit {
  // Definimos el grupo del formulario
  miFormulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializamos el formulario con las reglas de la imagen
    this.miFormulario = this.fb.group({
      // Campo Name: Obligatorio y mínimo 3 letras
      name: ['', [Validators.required, Validators.minLength(3)]],

      // Campo Data: Opcional, pero usaremos un validador personalizado para JSON
      data: ['', [this.validarJSON]]
    });
  }

  // Validador personalizado para verificar que el texto sea un JSON válido
  validarJSON(control: AbstractControl): ValidationErrors | null {
    const valor = control.value;
    if (!valor) return null; // Si está vacío es válido porque es opcional

    try {
      JSON.parse(valor);
      return null; // Es un JSON válido
    } catch (e) {
      return { jsonInvalido: true }; // No es un JSON válido
    }
  }

  // Función que se ejecuta al dar clic en "Guardar"
  guardar() {
    if (this.miFormulario.valid) {
      console.log('Objeto a enviar:', this.miFormulario.value);
      alert('¡Item creado con éxito! Revisa la consola (F12) para ver el objeto.');
      // Aquí podrías limpiar el formulario después de guardar
      this.miFormulario.reset();
    } else {
      // Marcamos todos los campos como tocados para que se vean los errores en rojo
      this.miFormulario.markAllAsTouched();
    }
  }
}
