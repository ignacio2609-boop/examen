import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Alumno } from '../list/alumno.model';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  alumnoForm: FormGroup;
  alumnos: Alumno[] = [];
  constructor(private fb: FormBuilder) {
    this.alumnoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      DNI: ['', [Validators.required, ]],
      telefono: ['', [Validators.required,]]
    });
  }

  ngOnInit(): void { }

  agregarAlumno(): void {
    if (this.alumnoForm.valid) {
      const nuevoAlumno: Alumno = {
        nombre: this.alumnoForm.get('nombre')?.value,
        apellidos: this.alumnoForm.get('apellido')?.value,
        DNI: this.alumnoForm.get('DNI')?.value,
        Telefone: this.alumnoForm.get('telefono')?.value
      };

      this.alumnos.push(nuevoAlumno);
      this.alumnoForm.reset(); // Reiniciar el formulario después de agregar un alumno
    } else {
      console.log('Formulario no válido');
    }
  }
}
