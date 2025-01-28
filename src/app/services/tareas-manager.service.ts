import { inject, Injectable } from '@angular/core';
import { Criticidad, Tarea } from '../interfaces/tarea';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TareasManagerService {

  private tareas : Array<Tarea> = [];
  private almacenamientoService  = inject(LocalStorageService);
  constructor() { 
    //this.inicializarTareasFake();
    this.tareas = this.almacenamientoService.getTareas();
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


  /*
  private inicializarTareasFake() {
    let tareaFake1 : Tarea = {
      nombre: 'Comprar pan',
      descripcion: 'Esta es una tarea fake',
      criticidad: Criticidad.BAJA,
      estado: 'Finalizada',
      fechaLimite : new Date().toISOString()
    }
    let tareaFake2 : Tarea = {
      nombre: 'Alquilar coche',
      descripcion: 'Esta es una tarea fake 2',
      criticidad: Criticidad.MEDIA,
      estado: 'En proceso',
      fechaLimite : new Date().toISOString()
    }
    let tareaFake3 : Tarea = {
      nombre: 'Recoger niños en el judo',
      descripcion: 'Esta es una tarea fake 3',
      criticidad: Criticidad.ALTA,
      estado: 'Pendiente',
      fechaLimite : new Date().toISOString()
    }
    this.addTarea(tareaFake1);
    this.addTarea(tareaFake2);
    this.addTarea(tareaFake3)
  }
  */
}
