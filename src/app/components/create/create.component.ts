import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
import { ServiceDepartamentos } from '../../services/service.departamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;
  

  constructor(
    private _service: ServiceDepartamentos,
    private _router: Router
  ){}
  

  insertarDepartamento(): void{
    let id = parseInt(this.cajaId.nativeElement.value);
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let newDepartamento = new Departamento(id, nombre, localidad);
    this._service.insertDepartamento(newDepartamento).subscribe(response => {
      this._router.navigate(["/"])
    })
  }
}
