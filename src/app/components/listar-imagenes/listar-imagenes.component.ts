import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-listar-imagenes',
  templateUrl: './listar-imagenes.component.html',
  styleUrls: ['./listar-imagenes.component.css']
})
export class ListarImagenesComponent {
   

  validacion:string="No hay imagenes"   
  subscribe:Subscription;
  urlImagen:any[]=[]

  

  constructor(private servicio:ImagenesService){
    this.subscribe=this.servicio.getTerminoBusqueda().subscribe((data)=>{

      
      
       this.getImagenes(data)  
      


     




    })



    
  }

  getImagenes(termino:any){
    this.servicio.getApi(termino).subscribe( data=>{
        if(data.hits.length === 0){
          this.servicio.setError('No se encotro ninguna imagen')
        }


      console.log(data.hits)
          this.urlImagen=data.hits;

    })

  }


}
