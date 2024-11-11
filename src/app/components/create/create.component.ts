import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Departamento } from '../../models/departamento';
// import { ServiceDepartamentos } from '../../services/service.departamento';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajalocalidad") cajaLocalidad!: ElementRef;
  
  public departamento !: Departamento;

  constructor(){}
  

  nuevoDepartamento(): void{
    let id = this.cajaId.nativeElement.value;
    let nombre = this.cajaNombre.nativeElement.value;
    let localidad = this.cajaLocalidad.nativeElement.value;
    let departamentoNew = new Departamento(id, nombre, localidad);
    console.log(departamentoNew);
  }
}
