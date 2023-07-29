import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenesService } from 'src/app/service/imagenes.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent  implements OnInit, OnDestroy {
  titulo:string=''
   validar:boolean=false;
  subscriotion:Subscription

  constructor(private servicio:ImagenesService){
    this.subscriotion=this.servicio.getDatos().subscribe(data =>{
        this.mostrarMensaje()
      this.titulo=data;
      
    })
  }


  ngOnInit(): void {
    
  }

  mostrarMensaje(){
    this.validar=true;
    setTimeout(()=>{
      this.validar=false;
    

    },2000)
  }

  ngOnDestroy(): void {
        this.subscriotion.unsubscribe
  }



}
