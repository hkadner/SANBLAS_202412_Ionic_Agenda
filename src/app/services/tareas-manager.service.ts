import { Injectable } from '@angular/core';
import { Criticidad, Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasManagerService {

  private tareas : Array<Tarea> = [];
  constructor() { 
    let tareaFake : Tarea = {
      nombre: 'Tarea fake',
      descripcion: 'Esta es una tarea fake',
      criticidad: Criticidad.BAJA,
      estado: 'Finalizada',
      fechaLimite : new Date().toISOString()
    }
    let tareaFake2 : Tarea = {
      nombre: 'Tarea fake 2',
      descripcion: 'Esta es una tarea fake 2',
      criticidad: Criticidad.ALTA,
      estado: 'En proceso',
      fechaLimite : new Date().toISOString()
    }
    this.addTarea(tareaFake);
    this.addTarea(tareaFake2);
  }
  public addTarea(tarea: Tarea) {
    this.tareas.push({...tarea});//Para evitar duplicar la referencia
  }
  public getTareas() {
    return this.tareas;
  }
}
