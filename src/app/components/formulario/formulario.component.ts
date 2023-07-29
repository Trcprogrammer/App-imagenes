import { Component, OnDestroy, OnInit } from '@angular/core';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {
  datos:string='';
  validacion:string='Por favor llena el formulario';
  constructor(private _servicio:ImagenesService){
  
  }



  datosFormulario(){
    if(this.datos === ''){

   this._servicio.setError(this.validacion)
  return
    }

    this._servicio.enviarTerminoBusqueda(this.datos);

  }

}
