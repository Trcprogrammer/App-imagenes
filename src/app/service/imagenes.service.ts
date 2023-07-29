import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
   private error$= new Subject<string>();
   private listarImagen$=new Subject<string>();


url:any=''

  constructor( private _http:HttpClient) { }


  setError(error:string){
    return this.error$.next(error)
  }
  getDatos():Observable<any>{
 return   this.error$.asObservable()

  }

  enviarTerminoBusqueda(termino:string){
    return this.listarImagen$.next(termino)

  }


  getTerminoBusqueda():Observable<any>{
    return this.listarImagen$.asObservable()

  }
  
  getApi(dato:any):Observable<any>{
    const clave='32538234-9ba6833cbb620a60aeb7740cf'
    this.url='https://pixabay.com/api/?key='+clave+'&q='+dato;
    return   this._http.get(this.url);
    

  }




}
