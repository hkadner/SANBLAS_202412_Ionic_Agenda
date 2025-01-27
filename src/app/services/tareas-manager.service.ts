import { Injectable } from '@angular/core';
import { Tarea } from '../interfaces/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasManagerService {

  private tareas : Array<Tarea> = [];
  constructor() { }
  public addTarea(tarea: Tarea) {
    this.tareas.push({...tarea});//Para evitar duplicar la referencia
  }
  public getTareas() {
    return this.tareas;
  }
}
