import { inject, Injectable } from '@angular/core';
import { Criticidad, Tarea } from '../interfaces/tarea';
import { LocalStorageService } from './local-storage.service';
import { AngularStorageService } from './angular-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TareasManagerService {

  private tareas : Array<Tarea> = [];
  //private almacenamientoService  = inject(LocalStorageService);
  private almacenamientoService  = inject(AngularStorageService);
  constructor() {     
    //Llamada síncrona al servicio de almacenamiento (localStorage)
    //this.tareas = this.almacenamientoService.getTareas();

    //Llamada asíncrona al servicio de almacenamienot (angularStorage)
    this.almacenamientoService.getTareas()
    .then(data=>{
      if (data!=null){//Si no hay tareas almacenadas
        this.tareas = data;
      }
    })
    .catch(error=>{
      console.error("Ha ocurrido un error al leer los datos");
    })
    .finally(()=>{
      console.log("Fin del proceso de lectura");
    });
    
  }
  public addTarea(tarea: Tarea) {
    this.tareas.push({...tarea});//Para evitar duplicar la referencia
    this.almacenamientoService.guardarTareas(this.tareas);
  }
  public getTareas() {
    return this.tareas;
  }

  finalizarTarea(tarea: Tarea) {
    tarea.estado = 'Finalizada';
    this.almacenamientoService.guardarTareas(this.tareas);
  }
  procesarTarea(tarea: Tarea){
    tarea.estado = 'En proceso';
    this.almacenamientoService.guardarTareas(this.tareas);
  }
  reabrirTarea(tarea: Tarea) {
    tarea.estado = 'Pendiente';
    this.almacenamientoService.guardarTareas(this.tareas);
  }
}